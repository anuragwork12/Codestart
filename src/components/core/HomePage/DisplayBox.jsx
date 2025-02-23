import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
const DisplayBox = () => {
    
  return (
    <div className="flex h-[100%] w-[100%] justify-center items-center ">
      <div className=" relative rounded-2xl m-4 p-4 flex flex-col gap-2 h-[410px] w-[500px] bg-gradient-to-r from-zinc-5 to-zinc-800 s">
        <div className=" absolute  top-[-20px] right-[20px] w-[300px] h-[140px] bg-[#1D1E22] rounded-xl d">
          <div className="flex justify-between p-3">
            <div className="flex gap-2">
              {" "}
              <IoSettingsSharp className="text-pure-greys-400 text-xl" />
              <p className="text-white font-semibold">HTML</p>
            </div>{" "}
            <IoIosArrowDown className="text-pure-greys-400 text-xl" />
          </div>
          <div className="font-mono text-xs p-2">
          <p><span className="text-[rgb(88,176,135)]">&lt;div </span><span className="text-[rgb(213,150,47)]">class</span>=<span className="text-[rgb(59,120,173)]">"rect"</span><span className="text-[rgb(88,176,135)]">&gt;</span> <span className="text-[rgb(88,176,135)]">&lt;/div&gt;</span></p>
          </div>
        </div>
        <div className=" p-3 absolute  top-[130px] right-[-30px] w-[300px] h-[140px] bg-[#1D1E22] rounded-xl d ">
          <div className="flex justify-between ">
            <div className="flex gap-2">
              {" "}
              <IoSettingsSharp className="text-pure-greys-400 text-xl" />
              <p className="text-white font-semibold ">SCSS</p>
            </div>
            <IoIosArrowDown className="text-pure-greys-400 text-xl" />
          </div>
          <div className="font-mono text-xs p-2 text-[rgb(88,176,135)]">
          <TypeAnimation
              sequence={[
                "    .rect {    \n  background: linear-gradient  (\n$gray 0%,\n$dark-gray 100%); }",
                2000,
                "",
              ]}
              repeat={Infinity}
              cursor={true}
              
              omitDeletionAnimation={true}
            /> 
          </div>
        </div>
        <div className="absolute  top-[280px] right-[45px] w-[300px] h-[140px] bg-[#1D1E22] rounded-xl d">
          <div className="flex justify-between p-3">
            <div className="flex gap-2">
              {" "}
              <IoSettingsSharp className="text-pure-greys-400 text-xl" />
              <p className="text-white font-semibold">JS</p>
            </div>{" "}
            <IoIosArrowDown className="text-pure-greys-400 text-xl" />
          </div>
          <div className="font-mono  text-xs p-2">
            <p><span className="text-[rgb(213,150,47)]">var</span> <span className="text-[rgb(59,120,173)]">colors </span>= [<span className="text-[rgb(88,176,135)]">"#74B087","#DE7300","#74B087"</span>];</p>
            <br />
            <p><span className="text-[rgb(213,150,47)]">function </span><span className="text-[rgb(59,120,173)]"> animate</span>() {};</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;
