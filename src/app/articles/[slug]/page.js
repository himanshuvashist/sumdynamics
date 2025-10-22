// app/articles/[slug]/page.js
import parse from "html-react-parser";
import { getPostBySlug, getPostSlugs } from "../../../lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  const safe = (slugs || []).filter((s) => Boolean(s) && typeof s === "string");
  if (safe.length === 0) {
    console.warn("generateStaticParams: no post slugs found.");
  }
  return safe.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  if (!slug) {
    return notFound();
  }

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch (err) {
    console.warn(`PostPage: couldn't load post "${slug}": ${err.message}`);
    return notFound();
  }

  if (!post) return notFound();

  return (
    <article className="text-black p2 md:p-8">
      <header>
        <h4 className="mb-2 font-cabinet text-xl">{post.meta.title || slug}</h4>
        <p className="text-sm mb-6 font-cabinet">
          {post.meta.date && <time>{post.meta.date}</time>}
        </p>
      </header>

      <section className="font-cabinet text-gray-600 text-lg">
        {parse(post.contentHtml)}
      </section>
    </article>
  );
}
