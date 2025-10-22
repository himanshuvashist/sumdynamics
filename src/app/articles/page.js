// app/blog/page.jsx
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export const revalidate = false; // fully static (no ISR). Change if you want ISR.

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="text-black">
      <h1 className="font-cabinet text-center text-2xl">Press & Media</h1>
      <hr className="border-t border-gray-200 my-8" />

      <ul className="grid grid-rows-1 gap-8">
        {posts.map((p) => (
          <Link href={`/articles/${p.slug}`} key={p.slug}>
            <li
              className="bg-gray-100/70 hover:bg-gray-200 transition-colors duration-300 ease-in-out p-4 md:p-8 md:mx-8 rounded-lg"
              data-cursor="merge-cursor"
            >
              <h4 className="font-cabinet text-xl">{p.meta.title || p.slug}</h4>
              {p.meta.date && (
                <small className="font-cabinet">{p.meta.date}</small>
              )}
              {p.meta.description && (
                <p className="line-clamp-2 font-cabinet mt-4 text-gray-800">
                  {p.meta.description}
                </p>
              )}
            </li>
          </Link>
        ))}
      </ul>
      <hr className="border-t border-gray-200 my-8" />
    </div>
  );
}
