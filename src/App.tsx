import { useState } from "react";
import circles from "/pattern-circles.svg";
import bgPattern from "/bg-pattern.svg";
import check from "/icon-check.svg";
import PricePeriod from "./components/PricePeriod";
import RangeInput from "./components/RangeInput";

export const pricing = {
  annually: "annually",
  monthly: "monthly",
};

const pricingOptions = {
  annually: {
    price: 150.5,
    text: "year",
    description: "",
  },
  monthly: {
    price: 16.1,
    text: "month",
    description: "",
  },
};

function App() {
  const [position, setPosition] = useState(10);

  const [pricingSelected, setPricingSelected] = useState(
    pricingOptions.annually
  );

  function handlePricing() {
    if (pricingSelected.text === pricingOptions.annually.text) {
      setPricingSelected(pricingOptions.monthly);
    } else {
      setPricingSelected(pricingOptions.annually);
    }
  }
  const positionUse = position.toFixed(0);
  return (
    <div className="min-h-screen relative flex flex-col w-full font-manrope ">
      <div className="absolute">
        <img src={bgPattern} alt="" className="h-[470px]" />
      </div>
      <div className=" w-full z-10 absolute flex justify-center h-screen items-center flex-col  ">
        <div className="relative m-20 md:flex md:justify-center md:flex-col md:items-center">
          <img
            src={circles}
            alt=""
            className="bottom-[-60%] md:bottom-auto h-48  left-16 md:left-auto absolute "
          />
          <h1 className="text-2xl text-[#273455] pb-3 font-bold relative">
            Simple, traffic-based pricing
          </h1>
          <div className=" flex md flex-col md:flex-row gap-1">
            <p className="relative text-[#898fa5] font-semibold text-center">
              Sign-up for our 30-day trial.
            </p>
            <p className="relative text-[#898fa5] font-semibold text-center">
              No credit card required.
            </p>
          </div>
        </div>
        <div className="w-[386px] h-[563px] md:w-[540px] md:h-[388px] gap-7 bg-[#fbfcfe] shadow-md shadow-slate-200   rounded-lg flex flex-col text-center justify-center items-center ">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full gap-7 p-10">
              <div className="font-semibold  text-[#8187a2] flex md:flex-row justify-center tracking-widest md:items-center md:justify-between">
                {positionUse}K PAGEVIEWS
                <PricePeriod
                  className=" hidden md:block"
                  price={pricingSelected.price * (positionUse / 2)}
                  period={pricingSelected.text}
                />
              </div>

              <RangeInput position={position} setPosition={setPosition} />

              <PricePeriod
                className=" md:hidden  "
                price={pricingSelected.price * (positionUse / 2)}
                period={pricingSelected.text}
              />

              <div className=" text-[#8187a2] mt-5">
                <div className="flex justify-center gap-3 items-center flex-row text-[#8a8fa5] text-md">
                  <div className=""> Monthly Billing</div>
                  <button
                    onClick={handlePricing}
                    className="bg-[#d0d8ef] w-14 h-7 rounded-full relative  hover:bg-[#7ce9dc]"
                  >
                    <div
                      className={`${
                        pricingSelected.text === pricingOptions.monthly.text
                          ? "left-[4px] bg-white "
                          : "left-[30px] bg-white "
                      } " transition-all duration-250 ease-in-out top-1 rounded-full w-5  h-5 absolute`}
                    ></div>
                  </button>
                  <div className="">Yearly Billing</div>
                  <button className="bg-[#feeee8] text-[#e9977e] text-xs font-extrabold rounded-2xl px-3 py-1 ">
                    -25%
                  </button>
                </div>
              </div>
            </div>
            <hr className="w-full"></hr>
            <div className="flex flex-col w-full gap-7 p-10">
              <div className="flex-col flex gap-8 md:flex-row items-center md:justify-between md:w-full">
                <ul className="flex  flex-col gap-3 md:text-left md:items-start items-center text-md font-semibold text-[#9ca2b4]">
                  <li className="flex items-center ">
                    <img src={check} alt="" className="h-3 w-3 mr-4" />
                    <span>Unlimited websites</span>
                  </li>

                  <li className="flex items-center">
                    <img src={check} alt="" className="h-3 w-3 mr-4" />
                    <span> 100% data ownership</span>
                  </li>

                  <li className="flex items-center">
                    <img src={check} alt="" className="h-3 w-3 mr-4" />
                    <span>Email reports</span>
                  </li>
                </ul>

                <button className="bg-[#293356] mx-auto text-[#c7d4ff] py-3 p-4 font-semibold w-[200px] rounded-full">
                  Start my trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
