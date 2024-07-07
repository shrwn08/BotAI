import React from "react";
import FeedbackIcon from '../assets/idea.png'
import CloseIcon from '@mui/icons-material/Close';
const Feedback = ({
  handleClose,
  textFeedback,
  setTextFeedback,
  handleSubmitFeedback,
}) => {
  const handleTextChange = (event) => {
    setTextFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitFeedback(textFeedback);
    setTextFeedback("");
  };

  return (
    <div className="h-screen w-screen  flex flex-col bg-transparent items-center">
      <form
        onSubmit={handleSubmit}
        className="w-3/4 h-[335px] bg-[#FAF7FF] flex flex-col items-center gap-4"
      >
        <div className="w-full flex justify-between items-center px-8">
        <div className="flex gap-4">

          <img src={FeedbackIcon}  className='w-[40px] h-[42px]' alt='feedback'/>
          <p className="font-[sans] text-[22px] font-normal">Provide Additional Feedback</p>
        </div>
    <CloseIcon />
        </div>
        <textarea
          className="w-10/12 h-[187px] p-4 rounded-lg bg-white border-none outline-none"
          placeholder="Your feedback here..."
          value={textFeedback}
          onChange={handleTextChange}
        />

        <button
          type="submit"
          className="w-40 h-10 rounded-xl bg-[#D7C7F4] cursor-pointer font-[ubuntu] font-bold text-base"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
