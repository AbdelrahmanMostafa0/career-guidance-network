import React from "react";
// import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "./NotSigned/sections/HeroSection";
import KeyFeatures from "./NotSigned/sections/KeyFeatures";
import HowItWorks from "./NotSigned/sections/HowItWorks";
const Home = () => {
  return (
    <main className="w-[95%] sm:w-[90%] mx-auto my-5">
      {/* --------------------- hero Section -------------------- */}
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <section className="flex  p-7 md:px-14 gap-10 items-center justify-center">
        <Link
          href={"/signup"}
          className="border w-96 text-center p-3 bg-lighterGreen rounded-full text-white font-bold hover:bg-lightGreen duration-150"
        >
          Join US Now
        </Link>
      </section>
    </main>
  );
};

export default Home;
