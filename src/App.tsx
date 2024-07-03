// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import circles from "/pattern-circles.svg";
import bgPattern from "/bg-pattern.svg";
import check from "/icon-check.svg";
import slider from "/icon-slider.svg";

function App() {
  return (
    <div className="min-h-screen relative flex flex-col w-full font-manrope ">
      <div className="absolute">
        <img src={bgPattern} alt="" className="h-[470px]" />
      </div>
      <div className=" w-full z-10 absolute flex justify-center h-screen items-center flex-col  ">
        <div className="relative m-20">
          <img
            src={circles}
            alt=""
            className="bottom-[-60%] h-48 left-16 absolute "
          />
          <h1 className="text-2xl text-[#273455] pb-3 font-bold relative">
            Simple, traffic-based pricing
          </h1>
          <p className="relative text-[#898fa5] font-semibold text-center">
            Sign-up for our 30-day trial.
          </p>
          <p className="relative text-[#898fa5] font-semibold text-center">
            No credit card required.
          </p>
        </div>
        <div className="w-[386px] h-[563px] gap-7 bg-[#fbfcfe] shadow-md shadow-slate-200   rounded-lg flex flex-col text-center justify-center items-center ">
          <div className="flex flex-col gap-7">
            <div className="font-semibold text-[#8187a2]  tracking-widest">
              100K PAGEVIEWS
            </div>
            <div className=" relative w-full">
              {/* absolute with left % */}
              <div className="bg-[#ebf1fb] h-2 rounded-lg absolute w-full"></div>
              <div
                style={{ width: " 50%" }}
                className="bg-[#a4f2ea] h-2 z-10 rounded-lg absolute left-0 "
              ></div>
            </div>
            <div
              style={{ left: "50%" }}
              className="bg-[#11d8c5] shadow-xl z-20 shadow-[#a4f2ea] left-[50%] relative bottom-12 rounded-full w-[45px] h-[45px]"
            >
              <img src={slider} alt="" className="h-4 mt-[15px] ml-2" />
            </div>

            <div className=" text-[#8187a2]">
              <span className="text-4xl font-bold text-[#293557]">$16.00</span>/
              month
            </div>
            <div className=" text-[#8187a2]">
              <div className="flex justify-center gap-3 items-center flex-row text-[#8a8fa5] text-md">
                <div className=""> Monthly Billing</div>
                <button className="bg-[#d0d8ef] w-14 h-7 rounded-full relative ">
                  <div className="left-[4px] bg-white transition-all duration-250 ease-in-out top-1 rounded-full w-5  h-5 absolute"></div>
                </button>
                <div className="">Yearly Billing</div>
                <button className="bg-[#feeee8] text-[#e9977e] text-xs font-extrabold rounded-2xl px-3 py-1">
                  -25%
                </button>
              </div>
            </div>
            <hr></hr>
            <ul className="flex flex-col gap-3 items-center text-md font-semibold text-[#9ca2b4]">
              <div className="flex items-center">
                <img src={check} alt="" className="h-3 w-3 mx-4" />
                <li>Unlimited websites</li>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="h-3 w-3 mx-4" />
                <li> 100% data ownership</li>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="h-3 w-3 mx-4" />
                <li>Email reports</li>
              </div>
            </ul>
          </div>
          <button className="bg-[#293356] mx-auto text-[#c7d4ff] p-3 font-semibold w-[200px] rounded-3xl">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
