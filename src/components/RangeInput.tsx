import { useState } from "react";
import { useRef } from "react";
import slider from "/icon-slider.svg";

/* <input type="range" className="w-full" value={} onChange={}></input> */

export default function RangeInput() {
  const [position, setPosition] = useState(10);
  const percentage = position + "%";
  const myRef = useRef(null);

  console.log("render");

  const handleClick = (e) => {
    // 1. Create a reatangle variable
    console.log(myRef.current?.getBoundingClientRect());

    // 2. if not rectangle, return

    // 3. Get click X position

    // 4. Get rectangle left and rectangle right

    // 5. calculate click relative position percentage
    // width = right - left
    // positionPercentage = (click - left) / width * 100
    // Print position percetnage
    // 6. Update state
  };
  return (
    <div>
      <div ref={myRef} onClick={handleClick} className=" relative w-full">
        {/* absolute with left % */}
        <div className="bg-[#ebf1fb] h-2 rounded-lg absolute w-full"></div>
        <div
          style={{ width: percentage }}
          className="bg-[#a4f2ea] h-2 z-10 rounded-lg absolute left-0 "
        ></div>
      </div>
      <div
        style={{ left: percentage }}
        className="bg-[#11d8c5] shadow-xl z-20 shadow-[#a4f2ea] left-[50%] relative bottom-12 rounded-full w-[45px] h-[45px]"
      >
        <img src={slider} alt="" className="h-4 mt-[15px] ml-2" />
      </div>
    </div>
  );
}
