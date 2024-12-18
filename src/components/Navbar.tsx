import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between xs:flex-row py-3 px-6 rounded-lg border-b-2 border-green-500 sticky top-0 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 z-10 shadow-lg">
    <nav className="flex items-center justify-center gap-x-12 font-bold uppercase">
      <Link href="/" className="text-3xl text-dark dark:text-light hover:text-green-600 transition-colors">
        Pak<span className="text-3xl text-green-600">Blogs</span>
      </Link>
      {/* Uncomment this link if needed */}
      {/* <Link href="/blogs" className="bg-accentDarkSecondary px-4 py-2 rounded-lg text-dark hover:bg-green-600 hover:text-light transition-all">
        Blogs
      </Link> */}
    </nav>
      <SocialMedia />
      <ThemeToggle />
    </header>
  );
}
