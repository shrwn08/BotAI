import React, { useState, useEffect } from "react";
import ChatData from "../Data.js/ChatData";
import Sidebar from "./Sidebar";
import ChatField from "./ChatField";
import { getCurrentTime } from './Time/Timing';

const Home = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [allConversations, setAllConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState([]);
  const [feedbackBtn, setFeedBackBtn] = useState(false);
  const [askBtn,setAskBtn] = useState(false);
  const [pastConversationBtn, setPastConversationBtn] = useState(false);
  const [ratingBtn, setRatingBtn] = useState(false);
  const [textFeedback, setTextFeedback] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 678);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAskBtn = (event) => {
    event.preventDefault();
    const lowerCaseUserInput = userInput.toLowerCase();
    const getResponse = ChatData.find(
      (entry) => lowerCaseUserInput === entry.question.toLowerCase()
    );

    if (getResponse) {
      const newEntry = {
        question: userInput,
        response: getResponse.response,
        time: getCurrentTime(),
        rating: null,
        feedback: null,
      };

      setResponse(getResponse.response);
      setChatHistory([...chatHistory, newEntry]);
    } else {
      setResponse("No response found");
    }
    setAskBtn(true);
    setUserInput("");
  };

  const handleInputField = (event) => {
    setUserInput(event.target.value);
  };

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleSaveConversation = () => {
    setAllConversations([...allConversations, chatHistory]);
    setChatHistory([]);
  };

  const handleViewConversation = (conversation) => {
    setCurrentConversation(conversation);
    setPastConversationBtn(true);
  };

  const handleFeedback = (question, response, feedback) => {
    const updatedChatHistory = chatHistory.map((entry) =>
      entry.question === question && entry.response === response
        ? { ...entry, feedback }
        : entry
    );
    setChatHistory(updatedChatHistory);
    setFeedBackBtn(true);
  };

  const handleSubmitFeedback = (rating, textFeedback) => {
    const updatedCurrentConversation = currentConversation.map((entry) => ({
      ...entry,
      rating,
      textFeedback,
    }));
    setCurrentConversation(updatedCurrentConversation);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {!isMobileView ? (
        <div className="h-screen w-3/12 bg-white">
          <Sidebar
            handleViewConversation={handleViewConversation}
          />
        </div>
      ) : (
        <div className="h-screen md:2/12 w-1/2 z-10 bg-white">
          {toggleIcon && (
            <Sidebar
              handleViewConversation={handleViewConversation}
            />
          )}
        </div>
      )}

      <div className="h-screen md:w-10/12 flex flex-grow">
        <ChatField
          toggleIcon={toggleIcon}
          handleToggle={handleToggle}
          handleInputField={handleInputField}
          userInput={userInput}
          handleAskBtn={handleAskBtn}
          askBtn={askBtn}
          chatHistory={currentConversation.length ? currentConversation : chatHistory}
          handleFeedback={handleFeedback}
          feedbackBtn={feedbackBtn}
          handleSubmitFeedback={handleSubmitFeedback}
          handleSaveConversation={handleSaveConversation}
          pastConversationBtn={pastConversationBtn}
          allConversations={allConversations}
        />
      </div>
    </div>
  );
};

export default Home;
