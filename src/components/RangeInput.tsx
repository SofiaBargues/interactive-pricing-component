import { useState } from "react";
import { useRef } from "react";
import slider from "/icon-slider.svg";

/* <input type="range" className="w-full" value={} onChange={}></input> */

export default function RangeInput({
  position,
  setPosition,
}: {
  position: number;
  setPosition: (position: number) => void;
}) {
  const percentage = position + "%";
  const myRef = useRef(null);

  console.log("render");

  const handleClick = (e) => {
    // 1. Create a rectangle variable
    // console.log(myRef.current?.getBoundingClientRect());
    const sliderRectangle = myRef.current?.getBoundingClientRect();
    console.log(myRef);
    // 2. if not rectangle, return
    if (sliderRectangle) {
      // 3. Get click X position

      const clickPosX = (e as MouseEvent).clientX;

      // 4. Get rectangle left and rectangle right

      const rectangleLeft = sliderRectangle.left;
      const rectangleRight = sliderRectangle.right;
      // 5. calculate click relative position percentage
      // width = right - left
      const width = rectangleRight - rectangleLeft;
      // positionPercentage = (click - left) / width * 100

      const positionPercentage = ((clickPosX - rectangleLeft) / width) * 100;
      // Print position percetnage
      console.log(positionPercentage);
      // 6. Update state
      setPosition(positionPercentage);
    }
  };
  return (
    <div>
      <div ref={myRef} onClick={handleClick} className=" relative w-full h-2">
        {/* absolute with left % */}

        <div className="bg-[#ebf1fb] h-2 rounded-lg absolute w-full"></div>
        <div
          style={{ width: percentage }}
          className="bg-[#a4f2ea] h-2 z-10 rounded-l-lg  absolute left-0 "
        ></div>
        <div
          style={{ left: percentage }}
          className="bg-[#11d8c5] shadow-xl z-40 shadow-[#a4f2ea] right-[20px] -translate-x-1/2 -translate-y-1/2 relative top-1 rounded-full w-[45px] h-[45px]"
        >
          <img
            src={slider}
            alt=""
            className="h-4 mt-[19px] ml-2 relative top-[14px]"
          />
        </div>
      </div>
    </div>
  );
}
