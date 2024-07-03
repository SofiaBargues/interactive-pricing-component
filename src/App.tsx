// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import circles from "/pattern-circles.svg";

function App() {
  return (
    <>
      <div className="bg-[#f1f5fe] h-[470px]  rounded-bl-[300px]  absolute w-full"></div>
      <div className="min-h-screen w-full relative font-manrope flex justify-center  flex-col">
        <div className="z-10 absolute m-[28px] h-screen flex justify-around flex-col ">
          <div className="relative">
            <img src={circles} alt="" className=" absolute " />
            <h1 className="">Simple, traffic-based pricing</h1>
            <p>Sign-up for our 30-day trial. No credit card required.</p>
          </div>
          <div>
            100K PAGEVIEWS $16.00 / month c Monthly Billing Yearly Billing -25%
            Unlimited websites 100% data ownership Email reports Start my trial
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
