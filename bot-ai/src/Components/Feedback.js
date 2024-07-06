import React, { useState } from "react";
import IdeaIcon from "../assets/idea.png";
import CloseIcon from "@mui/icons-material/Close";

const Feedback = ({ handleSubmitFeedback }) => {
  const [textFeedback, setTextFeedback] = useState("");

  const handleSubmit = () => {
    handleSubmitFeedback( textFeedback);
    setTextFeedback("");
  };

  return (
    <div className="flex justify-center h-screen w-screen items-center p-4 fixed left-0 top-0">
      <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <img src={IdeaIcon} className="w-6 h-6" alt="idea" />
            Provide Additional Feedback
          </div>
          <CloseIcon className="cursor-pointer" />
        </div>
       
        <textarea
          className="w-full h-24 p-2 border rounded-md"
          placeholder="Your feedback..."
          value={textFeedback}
          onChange={(e) => setTextFeedback(e.target.value)}
        />
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
