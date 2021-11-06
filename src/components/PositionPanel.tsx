import React from "react";

import { Position, Source } from "src/types";

interface Props {
  onClose?: () => void;
  position: Position;
}

const PositionPanel: React.FC<Props> = ({ onClose, position }) => (
  <div className="z-30 absolute top-0 left-0 w-screen h-screen bg-gray-100 p-4">
    <div
      className="cursor-pointer z-20 p-2 absolute top-3 right-3 rounded-full bg-gray-200 text-blue-500 ring ring-blue-300"
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
    <div className="text-3xl">
      Position {position.candidate_id} sur {position.subject_id}
    </div>

    <p>Position : {position.rank}</p>
    <p>Texte : {position.text}</p>

    <div className="text-xl mt-2">Sources</div>
    {position.sources.map((source: Source) => (
      <div key={source.url}>
        <p>Date : {source.date}</p>
        <p>Lien : {source.url}</p>
        <p>Description : {source.description}</p>
      </div>
    ))}
  </div>
);

PositionPanel.defaultProps = {
  onClose: () => {
    /* do nothing */
  },
};

export default PositionPanel;
