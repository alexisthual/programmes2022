import React from "react";

import AppContext from "@/context/AppContext";

const Toggle: React.FC<unknown> = () => {
  const { simplified, setContext } = React.useContext(AppContext);

  return (
    <label htmlFor="search" className="flex items-center gap-4 cursor-pointer">
      <div className="ml-3 text-gray-700 font-medium">Citation</div>
      <div className="relative">
        <input
          type="checkbox"
          id="toggleB"
          className="sr-only"
          checked={simplified ?? false}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContext({
              simplified: event.target.checked,
            });
          }}
        />
        <div className="block bg-gray-300 w-14 h-8 rounded-full" />
        <div className="dot cursor-pointer absolute left-1 top-1 bg-gray-700 w-6 h-6 rounded-full transition" />
      </div>
      <div className="text-gray-700 font-medium">Simplifié</div>
    </label>
  );
};

export default Toggle;
