import React, {useState} from "react";
import LogoIcon from "../assets/Logo-image.png";
import UserIcon from "../assets/user.png";
import Like from "../assets/like.png";
import Dislike from "../assets/dislike.png";
import RatingQnA from "./RatingQnA";
import Feedback from "./Feedback";

const QnACard = ({
  question,
  response,
  handleFeedback,
  feedbackBtn
}) => {
  


  return (
    <div className="h-full flex flex-col justify-end items-center gap-4 ">
      <div
        className="w-11/12 h-28 flex justify-start items-center gap-3 rounded-[20px] drop-shadow-xl bg-[#D7C7F421]"
        id="user-card"
      >
        <div className="h-20 w-20 ml-4 rounded-full overflow-hidden" id="logo">
          <img src={UserIcon} alt="user" />
        </div>
        <div>
          <div
            className="font-[ubuntu] font-bold text-base text-black"
            id="User"
          >
            User
          </div>
          <div
            id="question"
            className="font-[sans] font-normal text-base text-black"
          >
            {question}
          </div>
          <div className="flex gap-4" id="like-dislike-date">
            <div
              className="font-[sans] font-normal text-xs text-[#0000009E]"
              id="date"
            >
              02:02 PM
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-11/12 h-28 flex justify-start items-center gap-3 rounded-[20px] drop-shadow-xl bg-[#D7C7F421]"
        id="ai-card"
      >
        <div className="h-20 w-20 ml-4 rounded-full overflow-hidden" id="logo">
          <img src={LogoIcon} alt="logo" />
        </div>
        <div>
          <div
            className="font-[ubuntu] font-bold text-base text-black"
            id="SoulAi"
          >
            Soul AI
          </div>
          <div
            id="response"
            className="font-[sans] font-normal text-base text-black"
          >
            {response}
          </div>
          <div className="flex gap-4" id="like-dislike-date">
            <div
              className="font-[sans] font-normal text-xs text-[#0000009E]"
              id="date"
            >
              02:03 PM
            </div>
            <button >
              <img src={Like} className="w-4 h-4" alt="like" />
            </button>
            {(<RatingQnA />)}
            <button onClick={handleFeedback}>
              <img src={Dislike} className="w-4 h-4" alt="dislike" />
            </button>
            {feedbackBtn && (<Feedback />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnACard;
