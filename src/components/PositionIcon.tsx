import React from "react";

export const NegativeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 p-1 rounded-full ring-2 ring-inset ring-red-400 stroke-current text-red-400"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 12H6"
    />
  </svg>
);

export const PositiveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 p-1 rounded-full ring-2 ring-inset ring-green-500 stroke-current text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

interface Props {
  rank: number;
}

export const PositionIcon = ({ rank }: Props) => {
  let rankContent = null;

  switch (rank) {
    case -2:
      rankContent = (
        <div className="flex flex-row gap-x-1" role="button" tabIndex={0}>
          <NegativeIcon />
          <NegativeIcon />
        </div>
      );
      break;
    case -1:
      rankContent = (
        <div className="flex flex-row gap-x-1" role="button" tabIndex={0}>
          <NegativeIcon />
        </div>
      );
      break;
    case 0:
      rankContent = (
        <div
          className="flex flex-row gap-x-1 text-gray-600"
          role="button"
          tabIndex={0}
        >
          =
        </div>
      );
      break;
    case 1:
      rankContent = (
        <div className="flex flex-row gap-x-1" role="button" tabIndex={0}>
          <PositiveIcon />
        </div>
      );
      break;
    case 2:
      rankContent = (
        <div className="flex flex-row gap-x-1" role="button" tabIndex={0}>
          <PositiveIcon />
          <PositiveIcon />
        </div>
      );
      break;
    default:
      break;
  }

  return rankContent;
};

export const PositionText = ({ rank }: Props) => {
  let text = null;
  let color = null;

  switch (rank) {
    case -2:
      text = `Très défavorable`;
      color = `red-400`;
      break;
    case -1:
      text = `Défavorable`;
      color = `red-400`;
      break;
    case 0:
      text = `Neutre`;
      color = `grey-600`;
      break;
    case 1:
      text = `Favorable`;
      color = `green-500`;
      break;
    case 2:
      text = `Très favorable`;
      color = `green-500`;
      break;
    default:
      break;
  }

  return <div className={`text-${color}`}>{text}</div>;
};

export const PositionColor = ({ rank }: Props) => {
  let text = null;

  switch (rank) {
    case -2:
      break;
    case -1:
      text = `red-400`;
      break;
    case 0:
      text = `gray-600`;
      break;
    case 1:
      text = `green-500`;
      break;
    case 2:
      text = `green-500`;
      break;
    default:
      break;
  }

  return text;
};

export default PositionIcon;
