import React from "react";
// import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "./sections/HeroSection";
import KeyFeatures from "./sections/KeyFeatures";
const Home = () => {
  return (
    <main className="w-[90%] mx-auto my-5">
      {/* --------------------- hero Section -------------------- */}
      <HeroSection />
      <KeyFeatures />
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
