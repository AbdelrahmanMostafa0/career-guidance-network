import Link from "next/link";
import React, { useState } from "react";
import Card from "./Card/Card";

export default function Home() {
  const [howItWork, setHowItWork] = useState("student");
  return (
    <main className="home-container">
      <div className="home-inner-container">
        <section className="first-section">
          <div className="part-one">
            <h1>CGN Your way to success</h1>
            <Link href="#">Get Started</Link>
            <img src="/study.png" />
          </div>

          <div className="part-two">
            <div className="road-maps-continer">
              <p>Roadmaps and career paths to choose from</p>
              <h3>view Roadmaps</h3>
            </div>
          </div>
        </section>

        <section className="second-section space-y-7">
          <h1>How It Works</h1>
          <div className="mx-auto border-2 border-darkBlue rounded-full  w-96 flex items-center ">
            <div
              onClick={() => {
                setHowItWork("student");
              }}
              className={`h-full  w-full text-center rounded-full cursor-pointer text-xl font-semibold  p-3${
                howItWork === "student" && " bg-darkBlue text-white "
              }`}
            >
              Student
            </div>
            <div
              onClick={() => {
                setHowItWork("company");
              }}
              className={`h-full  w-full text-center rounded-full  cursor-pointer text-xl font-semibold  p-3${
                howItWork === "company" && " bg-darkBlue text-white"
              }`}
            >
              Company
            </div>
          </div>
          <div className="cards-container">
            <Card title="Learn & Grow">
              Lorem ipsum dolor sit amet consectetur. Ipsum faucibus a elementum
              risus risus. Tincidunt nisl tellus arcu
            </Card>
            <Card title="Build Projects">
              Lorem ipsum dolor sit amet consectetur. Ipsum faucibus a elementum
              risus risus. Tincidunt nisl tellus arcu
            </Card>
            <Card title="Build Projects">
              Lorem ipsum dolor sit amet consectetur. Ipsum faucibus a elementum
              risus risus. Tincidunt nisl tell{}
              us arcu
            </Card>
          </div>
        </section>
      </div>
      <section className="third-section">
        <div className="title">
          <h1>
            Choose Your <span>desired</span> Career path
          </h1>
        </div>
      </section>
    </main>
  );
}
