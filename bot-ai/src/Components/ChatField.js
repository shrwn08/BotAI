import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChatInputField from "./ChatInputField";
import QnACard from "./QnACard";
import HistoryChatCard from "./HistoryChatCard";

const ChatField = ({
  toggleIcon,
  handleToggle,
  handleInputField,
  userInput,
  handleAskBtn,
  chatHistory,
  handleFeedback,
  feedbackBtn,
  handleSaveConversation,
  pastConversationBtn,
  allConversations
}) => {
  return (
    <div className="flex md:w-full h-full flex-col justify-between bg-gradient-to-r from-[#F9FAFA] to-[#EDE4FF] md:bg-gradient-to-r from-[#D7C7F433] to-[#9785BA33]">
      <div className="flex gap-4 w-screen" id="navbar">
        <div className="md:hidden" id="toggle-icon">
          <button onClick={handleToggle}>
            {toggleIcon ? (
              <CloseIcon
                sx={{
                  width: "32px",
                  height: "32px",
                  color: "#9785BA",
                }}
              />
            ) : (
              <MenuIcon
                sx={{
                  width: "32px",
                  height: "32px",
                  color: "#9785BA",
                }}
              />
            )}
          </button>
        </div>
        <div
          className="font-[ubuntu] font-bold text-3xl text-[#9785BA]"
          id="text-head"
        >
          Bot AI
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4 overflow-y-scroll">
        {chatHistory.map((entry, index) => (
          <QnACard
            key={index}
            question={entry.question}
            response={entry.response}
            handleFeedback={handleFeedback}
            feedbackBtn={feedbackBtn}
          />
        ))}
      </div>
      {pastConversationBtn && (<HistoryChatCard allConversations={allConversations} />)}
      <ChatInputField
        handleInputField={handleInputField}
        userInput={userInput}
        handleAskBtn={handleAskBtn}
        handleSaveConversation={handleSaveConversation}
      />
    </div>
  );
};

export default ChatField;