import parse from "html-react-parser";
import { getPostBySlug, getPostSlugs } from "../../../lib/posts";
import Navbar from "@/components/Navbar";
import Foot from "@/components/footer";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return (slugs || []).map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <p>The requested post &quot;{slug}&quot; does not exist.</p>
      </div>
    );
  }

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
