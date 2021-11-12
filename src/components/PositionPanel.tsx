import React from "react";

import { PositionIcon, PositionText } from "src/components/PositionIcon";
import { Position, Source } from "src/types";

interface Props {
  onClose?: () => void;
  position: Position;
  candidate?: string;
  subject?: string;
}

const PositionPanel: React.FC<Props> = ({
  onClose,
  position,
  candidate,
  subject,
}) => {
  const platforms = [`youtu`, `vimeo`];

  return (
    <div
      id="position-panel"
      className="z-30 absolute top-0 left-0 w-screen h-screen bg-gray-100"
    >
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

      <div className="flex flex-col items-center gap-y-4 mb-4 p-4 w-screen">
        <div className="text-4xl text-center text-gray-800">
          {candidate} - {subject}
        </div>
        <div className="flex flex-row gap-x-2 justify-center text-xl text-gray-900 font-bold">
          <PositionIcon rank={position.rank} />
          <PositionText rank={position.rank} />
        </div>
        <div className="text-gray-800 font-sans text-xl text-center font-medium lg:w-6/12">
          «{position.text}»
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="text-3xl mt-2 text-center text-gray-800">Sources</div>
        {position.sources.map((source: Source) => (
          <div className="source" key={source.url}>
            <div className="flex flex-row gap-x-2">
              <div className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-gray-900">{source.date}</div>
            </div>
            <div className="flex flex-row gap-x-2">
              <div className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <div>
                <a href={source.url}>{source.url}</a>
              </div>
            </div>
            <div className="flex flex-row gap-x-2">
              <div className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>{source.description}</div>
            </div>
            {platforms.some((platform: string) =>
              source.url.includes(platform),
            ) ? (
              <div className="m-2 flex justify-center">
                <iframe
                  src={source.url}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

PositionPanel.defaultProps = {
  onClose: () => {
    /* do nothing */
  },
  candidate: null,
  subject: null,
};

export default PositionPanel;
