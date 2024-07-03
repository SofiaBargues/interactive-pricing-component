// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import circles from "/pattern-circles.svg";
import bgPattern from "/bg-pattern.svg";

function App() {
  return (
    <div className="min-h-screen relative flex flex-col w-full font-manrope">
      <div className="absolute">
        <img src={bgPattern} alt="" className="h-[470px]" />
      </div>
      <div className="w-full z-10 absolute flex justify-center items-center flex-col">
        <div className="flex justify-around flex-col ">
          <div className="relative">
            <img src={circles} alt="" className=" top-0 absolute " />
            <h1 className="text-2xl text-[#273455] font-bold">
              Simple, traffic-based pricing
            </h1>
            <p>Sign-up for our 30-day trial. No credit card required.</p>
          </div>
          <div className="w-[386px] h-[563px] bg-white border-2 ">
            100K PAGEVIEWS $16.00 / month c Monthly Billing Yearly Billing -25%
            Unlimited websites 100% data ownership Email reports Start my trial
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
