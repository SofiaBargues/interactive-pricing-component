import { useState } from "react";
import slider from "/icon-slider.svg";

/* <input type="range" className="w-full" value={} onChange={}></input> */

export default function RangeInput() {
  const [position, setPsition] = useState("50%");

  return (
    <div>
      <div onClick={(e) => console.log(e)} className=" relative w-full">
        {/* absolute with left % */}
        <div className="bg-[#ebf1fb] h-2 rounded-lg absolute w-full"></div>
        <div
          style={{ width: position }}
          className="bg-[#a4f2ea] h-2 z-10 rounded-lg absolute left-0 "
        ></div>
      </div>
      <div
        style={{ left: position }}
        className="bg-[#11d8c5] shadow-xl z-20 shadow-[#a4f2ea] left-[50%] relative bottom-12 rounded-full w-[45px] h-[45px]"
      >
        <img src={slider} alt="" className="h-4 mt-[15px] ml-2" />
      </div>
    </div>
  );
}
