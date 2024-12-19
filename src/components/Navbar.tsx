"use client"
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="flex flex-col items-center py-3 px-6 rounded-lg border-b-2 border-green-500 sticky top-0 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 z-10 shadow-lg">
    {/* First Line: Logo */}
    <div className="flex items-center justify-center mb-1">
      <Link href="/" className="text-3xl text-dark dark:text-light hover:text-green-600 transition-colors">
        Pak<span className="text-3xl text-green-600">Blogs</span>
      </Link>
    </div>
  
    {/* Second Line: Navigation links (Optional) */}
    <div className="flex items-center justify-center mb-4">
      {/* Uncomment this link if needed */}
      {/* <Link href="/blogs" className="bg-accentDarkSecondary px-4 py-2 rounded-lg text-dark hover:bg-green-600 hover:text-light transition-all">
        Blogs
      </Link> */}
    </div>
  
    {/* Third Line: SignIn/SignOut Button and Social Media */}
    <div className="flex items-center justify-between gap-x-4 w-full">
      {/* Login Button or User Button */}
      <div className="flex items-center gap-x-4">
        <SignedOut>
          <SignInButton>
            <button className="px-6 py-2 bg-blue-800 rounded-lg outline-none text-white">Login</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
  
      {/* Social Media & Theme Toggle */}
      <div className="flex items-center gap-x-4">
        <SocialMedia />
        <ThemeToggle />
      </div>
    </div>
  </header>
  
  );
}
