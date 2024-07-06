import React, { useState } from "react";

const ChatInputField = ({
  userInput,
  handleInputField,
  handleAskBtn,
  handleSaveConversation,
}) => {
  return (
    <form onSubmit={handleAskBtn}>
      <div className="h-12 mb-2  md:w-full flex justify-center items-center gap-3">
        <input
          className="w-full h-10 md:w-10/12 rounded-[5px] border-[#00000073] border-2"
          type="text"
          value={userInput}
          onChange={handleInputField}
          required
        />
        <button
          type="submit"
          className="h-10 w-[74px] bg-[#D7C7F4] rounded-[5px] font-[ubuntu] font-normal text-base text-black"
        >
          Ask
        </button>
        <button onClick={handleSaveConversation} className="h-10 w-[74px] bg-[#D7C7F4] rounded-[5px] font-[ubuntu] font-normal text-base text-black">
          Save
        </button>
      </div>
    </form>
  );
};

export default ChatInputField;
