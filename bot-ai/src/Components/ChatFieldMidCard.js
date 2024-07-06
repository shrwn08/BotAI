import React from "react";
import LogoIcon from "../assets/Logo-image.png";
const ChatFieldMidCard = () => {
  return (
    <div className="h-full w-full flex flex-col justify-end items-center gap-40 ">
      <div className="flex flex-col justify-center items-center gap-4" id="heading-logo">
        <div className="">
          <h1 className=" text-medium text-3xl font-[ubuntu]">
            How Can I Help You Today?
          </h1>
        </div>
        <div className="h-20 w-20 rounded-full overflow-hidden">
          <img src={LogoIcon} alt="logo" />
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-3 md:grid md:grid-cols-2" id='cards'>
        <div className='rounded-[5px] w-[356px] h-28 bg-white flex flex-col gap-2 drop-shadow-xl' id="card1">
            <div className="h-12 w-36 ml-3 md:w-full font-[ubuntu] font-bold text-xl text-black" id='headline'>
            Hi, what is the weather
            </div>
            <div className="w-64 ml-3 md:w-full font-[open sans] text-normal text-[#00000080] text-base">
            Get immediate AI generated response
            </div>
        </div>
        <div className='rounded-[5px] w-[356px] h-28 bg-white flex flex-col gap-2 drop-shadow-xl' id="card2">
            <div className="h-12 w-36 ml-3 md:w-full font-[ubuntu] font-bold text-xl text-black" id='headline'>
            Hi, what is the weather
            </div>
            <div className="w-64 ml-3 md:w-full font-[open sans] text-normal text-[#00000080] text-base">
            Get immediate AI generated response
            </div>
        </div>
        <div className='rounded-[5px] w-[356px] h-28 bg-white flex flex-col gap-2 drop-shadow-xl' id="card3">
            <div className="h-12 w-36 ml-3 md:w-full font-[ubuntu] font-bold text-xl text-black" id='headline'>
            Hi, what is the weather
            </div>
            <div className="w-64 ml-3 md:w-full font-[open sans] text-normal text-[#00000080] text-base">
            Get immediate AI generated response
            </div>
        </div>
        <div className='rounded-[5px] w-[356px] h-28 bg-white flex flex-col gap-2 hidden md:block' id="card4">
            <div className="h-12 w-36 ml-3 md:w-full font-[ubuntu] font-bold text-xl text-black" id='headline'>
            Hi, what is the weather
            </div>
            <div className="w-64 ml-3 md:w-full font-[open sans] text-normal text-[#00000080] text-base">
            Get immediate AI generated response
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFieldMidCard;
