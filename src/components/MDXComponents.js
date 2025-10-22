import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

// a helper replaced element example
function transform(node, index) {
  const { name, attribs, children } = node || {};
  // html-react-parser uses node.type === 'tag', and node.name
  if (!node || node.type !== "tag") return;

  if (node.name === "img") {
    // return a Next Image fallback; requires width/height or layout strategy
    const src = node.attribs.src || "";
    const alt = node.attribs.alt || "";
    // fallback to a plain img if external or if width/height not provided
    return <img key={index} src={src} alt={alt} style={{ maxWidth: "100%" }} />;
  }

  if (node.name === "a") {
    const href = node.attribs.href || "";
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          {parse(children)}
        </a>
      );
    } else {
      return (
        <Link key={index} href={href}>
          {parse(children)}
        </Link>
      );
    }
  }

  // return undefined to use default behavior
}
