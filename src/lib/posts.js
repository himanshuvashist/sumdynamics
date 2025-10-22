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

export async function getPostSlugs() {
  const exists = await dirExists(postsDir);
  if (!exists) return [];
  const names = await fs.promises.readdir(postsDir);
  return names
    .filter((n) => n.endsWith(".md"))
    .map((n) => n.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  try {
    await fs.promises.access(fullPath, fs.constants.R_OK);
  } catch (err) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const raw = await fs.promises.readFile(fullPath, "utf8");

  // parse frontmatter - wrap for friendly errors
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

  // Build pipeline: markdown -> mdast -> hast -> sanitized hast -> HTML string
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSanitize) // sanitize AST
    .use(rehypeStringify);

  const file = await processor.process(content);
  const safeHtml = String(file); // sanitized HTML

  return {
    slug,
    meta: data,
    contentHtml: safeHtml, // sanitized HTML string
  };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  if (!slugs || slugs.length === 0) return [];
  const posts = await Promise.all(slugs.map((s) => getPostBySlug(s)));
  posts.sort((a, b) => {
    const da = a.meta?.date ?? "";
    const db = b.meta?.date ?? "";
    return db.localeCompare(da);
  });
  return posts;
}
