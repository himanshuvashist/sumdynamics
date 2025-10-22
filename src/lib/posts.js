// lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const CANDIDATE_DIRS = [
  path.join(process.cwd(), "src", "content", "blog"),
  path.join(process.cwd(), "content", "blog"),
];

function resolvePostsDir() {
  for (const d of CANDIDATE_DIRS) {
    try {
      const stat = fs.statSync(d);
      if (stat.isDirectory()) return d;
    } catch (e) {
      // ignore
    }
  }
  return CANDIDATE_DIRS[0];
}

const postsDir = resolvePostsDir();

async function dirExists(p) {
  try {
    const s = await fs.promises.stat(p);
    return s.isDirectory();
  } catch (e) {
    return false;
  }
}

function normalizeSlug(name) {
  if (!name || typeof name !== "string") return null;
  const slug = name.replace(/\.md$/, "").trim();
  if (!slug || slug.toLowerCase() === "undefined") return null;
  return slug;
}

export async function getPostSlugs() {
  const exists = await dirExists(postsDir);
  if (!exists) return [];
  const names = await fs.promises.readdir(postsDir);
  return names
    .filter((n) => n.endsWith(".md"))
    .map((n) => normalizeSlug(n))
    .filter(Boolean);
}

export async function getPostBySlug(slug) {
  if (!slug || typeof slug !== "string") {
    throw new Error(`Invalid slug passed to getPostBySlug: ${String(slug)}`);
  }

  const fullPath = path.join(postsDir, `${slug}.md`);
  try {
    await fs.promises.access(fullPath, fs.constants.R_OK);
  } catch (err) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const raw = await fs.promises.readFile(fullPath, "utf8");

  let data, content;
  try {
    const parsed = matter(raw);
    data = parsed.data || {};
    content = parsed.content || "";
  } catch (err) {
    throw new Error(
      `Failed to parse frontmatter for ${fullPath}: ${err.message}`,
    );
  }

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSanitize)
    .use(rehypeStringify);

  const file = await processor.process(content);
  const safeHtml = String(file);

  return {
    slug,
    meta: data,
    contentHtml: safeHtml,
  };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  if (!slugs || slugs.length === 0) return [];

  const posts = [];
  const errors = [];

  await Promise.all(
    slugs.map(async (s) => {
      try {
        const p = await getPostBySlug(s);
        posts.push(p);
      } catch (err) {
        errors.push({ slug: s, error: String(err.message) });
        console.warn(`Skipping post "${s}": ${err.message}`);
      }
    }),
  );

  posts.sort((a, b) => {
    const da = a.meta?.date ?? "";
    const db = b.meta?.date ?? "";
    return db.localeCompare(da);
  });

  if (errors.length > 0) {
    console.warn("Some posts were skipped due to errors:", errors);
  }

  return posts;
}
