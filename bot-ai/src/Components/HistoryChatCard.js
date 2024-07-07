import React from "react";
import UserIcon from "../assets/user.png";
import LogoIcon from "../assets/Logo-image.png";
import FixedRating from "./FixedRating";

const HistoryChatCard = ({ allConversations }) => {
  if (!allConversations) {
    return <div>Loading...</div>;
  }
  const conversation = allConversations.map((items,index)=>items)
console.log('from history card',allConversations)
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div className="font-ubuntu font-normal text-3xl text-black flex justify-center items-center mb-4">
        Conversation History
      </div>
      <div className="w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-md">
        {
          
            <div
              
              className="flex flex-col border-b border-gray-200 last:border-b-0"
            >
              {/* User's question */}
              <div className="flex items-start p-4">
                <img
                  src={UserIcon}
                  className="h-12 w-12 rounded-full mr-4"
                  alt="user"
                />
                <div className="flex flex-col">
                  <div className="font-bold text-base text-black">
                    User
                  </div>
                  <div className="text-base text-gray-800">
                    {conversation.question}
                  </div>
                  <div className="text-xs text-gray-500">
                    {conversation.time}
                  </div>
                </div>
              </div>

              {/* Soul AI's response */}
              <div className="flex items-start p-4">
                <img
                  src={LogoIcon}
                  className="h-12 w-12 rounded-full mr-4"
                  alt="logo"
                />
                <div className="flex flex-col">
                  <div className="font-bold text-base text-black">
                    Soul AI
                  </div>
                  <div className="text-base text-gray-800">
                    {conversation.response}
                  </div>
                  {conversation.time}
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-2">{conversation.time}</span>
                    {conversation.rating !== null && (
                      <FixedRating value={conversation.rating} />
                    )}
                  </div>
                  {conversation.feedback && (
                    <div className="font-bold text-base text-black">
                      Feedback:{" "}
                      <span className="text-base text-gray-800">
                        {conversation.feedback}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
         
        }
      </div>
    </div>
  );
};

export default HistoryChatCard;
