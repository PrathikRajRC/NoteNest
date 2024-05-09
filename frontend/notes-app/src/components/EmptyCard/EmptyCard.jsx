import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
    return (
        <div className="flex flex-col items-left justify-center mt-20">
            <img src={imgSrc} alt="No notes" className="w-80" />
            <p className="w-1/5 text-xl font-medium text-white text-left leading-10 mt-5">{message}</p>
        </div>
    );
};

export default EmptyCard;
