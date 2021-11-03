import React from "react";

import AppContext from "@/context/AppContext";

const Toggle: React.FC<unknown> = () => {
  const { simplified, setContext } = React.useContext(AppContext);

  return (
    <div
      id="simplified-toggle"
      className={`flex items-center ${simplified ? `simplified` : null}`}
    >
      <span className="">Citation</span>
      <div
        className="w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1"
        onClick={() => {
          setContext({
            simplified: !simplified,
          });
        }}
        onKeyDown={() => {
          setContext({
            simplified: !simplified,
          });
        }}
        role="button"
        tabIndex={0}
      >
        <div className="dot bg-white w-5 h-5 rounded-full shadow-md" />
      </div>
      <span className="">Simplifié</span>
    </div>
  );
};

export default Toggle;
