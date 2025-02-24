import React from "react";

interface buttonData {
  myClass?: string;
  text?: string;
  myOnclick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomButton = ({ myClass, text, myOnclick }: buttonData) => {
  return (
    <button
      onClick={myOnclick}
      className={` border border-custom-skyblue duration-300 ease-linear text-base font-semibold leading-[19.36px] shadow-button-shadow ${myClass}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
