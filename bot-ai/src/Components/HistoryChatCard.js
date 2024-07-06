import React from "react";
import UserIcon from '../assets/user.png'
import LogoIcon from '../assets/Logo-image.png'
import FixedRating from "./FixedRating";
const HistoryChatCard = ({allConversation}) => {
  if(allConversation){
    return <div>Loading...</div>
  }
  return (
    <div className="h-full flex flex-col justify-between items-center ">
      <div className="font-[ubuntu] font-nornal text-[28px] text-black flex justify-center items-center">
        Conversation History
      </div>
      <div className=" w-11/12 " id="chat-cards">
        Today's
        {allConversation.map((conversation,index)=>(
          <div className="w-full bg-gradient-to-r from-[#BFACE2] to-[#D7C7F4] p-4 rounded-xl" id="history-cards" key={index}>
            <div className=" flex gap-4">
                <img src={UserIcon} className="h-[65px] w-[65px] rounded-full" alt='user' />
                <div className="">
                    <div className="font-[ubuntu] font-bold text-base">User</div>
                    <div className="font-[sans] font-normal text-base text-black">{conversation.question}</div>
                    <div className="font-[sans] font-normal text-xs text-[#0000009E]">
                        15:13
                    </div>
                </div>
            </div>
            <div className=" flex gap-4 mt-4">
                <img src={LogoIcon} className="h-[65px] w-[65px] rounded-full" alt='logo' />
                <div className="">
                    <div className="font-[ubuntu] font-bold text-base">Soul AI</div>
                    <div className="font-[sans] font-normal text-base text-black">{conversation.response}</div>
                    <div className="font-[sans] font-normal text-xs flex justify-start items-center gap-4 text-[#0000009E]">
                        15:13
                        <FixedRating />
                    </div>
                    <div className="font-[sans] font-bold text-base text-black">
                        Feedback: <span className="font-[sans] font-normal text-base text-black">anjfnajilfnian</span> 
                    </div>
                </div>
            </div>
         </div> 
        ))}
           
      </div>
    </div>
  );
};

export default HistoryChatCard;
