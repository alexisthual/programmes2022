import React from "react";

import Toggle from "src/components/Toggle";

interface Props {
  onClose?: () => void;
}

const SettingsPanel: React.FC<Props> = ({ onClose }) => (
  <div className="z-30 absolute top-0 left-0 w-screen h-screen bg-gray-100 p-4">
    <Toggle />
    <div
      className="cursor-pointer z-20 p-2 absolute top-3 right-3 rounded-full bg-gray-200 text-blue-500"
      onClick={onClose}
      onKeyDown={onClose}
      role="button"
      tabIndex={0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
);

SettingsPanel.defaultProps = {
  onClose: () => {
    /* do nothing */
  },
};

export default SettingsPanel;
