import React from "react";
// import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "./sections/HeroSection";
import KeyFeatures from "./sections/KeyFeatures";
import HowItWorks from "./sections/HowItWorks";
const Home = () => {
  return (
    <main className="w-[95%] sm:w-[90%] mx-auto my-5">
      {/* --------------------- hero Section -------------------- */}
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <section className="flex  p-7 md:px-14 gap-10">
        {/* <img
          src="/handshake.jpg"
          className="w-1/2 drop-shadow-lg rounded-lg border"
          alt=""
        /> */}
      </section>
    </main>
  );
};

export default Home;
