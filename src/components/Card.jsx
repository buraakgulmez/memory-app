import React from "react";

const Card = ({ card, handleSelected, rotated, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleSelected(card);
    }
  };
  return (
    <div className="w-[120px] md:w-[170px] card">
      <div className={rotated ? "rotated" : ""}>
        <img className="front" src={card.path} alt="front" />
        <img
          className="back"
          onClick={handleClick}
          src="/img/question-mark.jpg"
          alt="back"
        />
      </div>
    </div>
  );
};

export default Card;
