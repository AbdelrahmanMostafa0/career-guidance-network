import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[80vh] bg-lightGreen rounded-2xl flex lg:flex-row flex-col justify-between  items-center p-7 md:px-14 overflow-auto">
      <div className="space-y-6 lg:w-1/2 text-center lg:text-start items-center lg:items-start flex flex-col order-2 lg:order-1">
        <h1
          style={{
            lineHeight: 1.2,
          }}
          className="text-3xl lg:text-6xl text-white font-bold leading-loose"
        >
          Unlock Your Future: Connecting Students with Opportunities
        </h1>
        <p className="text-sm md:text-xl leading-loose text-white">
          Empower your career journey with Carrer Guidance Network. Connect,
          collaborate, and thrive in our vibrant professional community. Your
          next opportunity awaits here. Join us today!
        </p>
        <Link
          href={"/"}
          className="text-white w-fit bg-darkBlue px-6 py-2 rounded-full text-xl hover:bg-white hover:text-darkBlue   duration-150"
        >
          {" "}
          Join Us Now
        </Link>
      </div>
      <img
        src={"/herosection.png"}
        alt="w-1/2 order-1 md"
        className="lg:w-5/12 order-1 lg:order-2 "
      />
    </section>
  );
};

export default HeroSection;
