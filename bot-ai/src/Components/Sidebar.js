import React from "react";
import EditIcon from "../assets/write.png";
import LogoIcon from "../assets/Logo-image.png";

const Sidebar = ({ handleViewConversation }) => {
  return (
    <>
      <div className="h-12 w-full flex justify-center items-center gap-5 bg-[#D7C7F4] ">
        <div className="w-10 drop-shadow-lg rounded-lg overflow-hidden">
          <img src={LogoIcon} className="w-full h-full object-cover" alt="logo" />
        </div>
        <div className="font-[ubuntu] text-xl font-normal ">New Chat</div>
        <div className="w-10 drop-shadow-lg">
          <img src={EditIcon} className="w-full h-full object-cover" alt="edit" />
        </div>
      </div>
      <div className="h-12 w-full flex justify-center items-center mt-3 ">
        <button
          className="w-44 h-10 rounded-xl bg-[#D7C7F4] cursor-pointer font-[ubuntu] font-bold text-base"
          onClick={handleViewConversation}
        >
          Past Conversations
        </button>
      </div>
    </>
  );
};

export default Sidebar;
