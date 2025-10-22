import "../globals.css";
import Navbar from "@/components/Navbar";
import Foot from "@/components/footer";

export const metadata = {
  title: "tt",
  description: "ttt",
};

export default function RootLayout({ children }) {
  return <div className="px-2 md:px-16">{children}</div>;
}
