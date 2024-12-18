import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function FooterLearn() {
  return (
    <section className="bg-green-600 px-6 sm:px-8 md:px-12 flex flex-col items-center gap-y-6 w-full md:w-1/2">
  <Image 
    src="/hasan.png" 
    alt="Hasan Rafay's picture" 
    width={150} 
    height={100} 
    className="mt-14"
  />
  <h1 className="text-white text-2xl font-bold mt-1">Hasan Rafay</h1>
  <p className="text-white text-center mt-2">
    A graphic designer from Global Computer Institute, Karachi, with Codesoft internship experience, 
    I specialize in design, 3D modeling, video editing, and web development. As a Governor House IT 
    Initiative participant, I’m exploring AI, Web 3.0, and the Metaverse. Fueled by tech's impact, I’m 
    a lifelong learner and a coffee enthusiast ☕.
  </p>
</section>

  );
}
