const HowItWorks = () => {
  return (
    <section className="my-3 p-7 space-y-10 pborder">
      <h3 className="text-center  text-5xl font-bold text-darkBlue tracking-wider	">
        {" "}
        How It Works
      </h3>
      <div className=" flex md:flex-row flex-col items-start justify-around gap-6 bg-lightGreen rounded-xl py-10 p-5">
        <div className="flex items-start gap-3 text-white w-full p-2 ">
          <div className="bg-slate-100 drop-shadow-lg p-5 rounded-3xl">
            <img src="/online-test.png" alt="" className="w-16" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Learn The Latest Skills</h3>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, iusto.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-white w-full p-2">
          <div className="bg-slate-100 drop-shadow-lg p-5 rounded-3xl">
            <img src="/exam.png" alt="" className="w-20" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Get Ready For a Career</h3>
            <p className="text-lg">
              Discover your dream career with us as We connect talented
              professionals with top opportunities.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-white w-full p-2">
          <div className="bg-slate-100 drop-shadow-lg p-5 rounded-3xl">
            <img src="/certification.png" alt="" className="w-20" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Get A Job</h3>
            <p className="text-lg">
              Kickstart your career journey with us and Access tailored
              resources and entry-level opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
