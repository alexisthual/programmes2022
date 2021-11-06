import React from "react";

interface Props {
  rank: number;
  text?: string;
  simplified?: boolean;
  interactionCallback: () => void;
}

const Negative = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 p-1 rounded-full ring-2 ring-inset ring-red-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 12H6"
    />
  </svg>
);
const Positive = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 p-1 rounded-full ring-2 ring-inset ring-green-500"
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

const TableCell: React.FC<Props> = ({
  rank,
  text,
  simplified,
  interactionCallback,
}) => {
  let content = null;
  let rankContent = null;
  const textContent = simplified ? null : (
    <div className="mt-2 text-sm font-base leading-tight">{text}</div>
  );

  switch (rank) {
    case -2:
      rankContent = (
        <div
          className="flex flex-row gap-x-1 text-red-400"
          role="button"
          tabIndex={0}
        >
          <Negative />
          <Negative />
        </div>
      );
      break;
    case -1:
      rankContent = (
        <div
          className="flex flex-row gap-x-1 text-red-400"
          role="button"
          tabIndex={0}
        >
          <Negative />
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
        <div
          className="flex flex-row gap-x-1 text-green-500"
          role="button"
          tabIndex={0}
        >
          <Positive />
        </div>
      );
      break;
    case 2:
      rankContent = (
        <div
          className="flex flex-row gap-x-1 text-green-500"
          role="button"
          tabIndex={0}
        >
          <Positive />
          <Positive />
        </div>
      );
      break;
    default:
      break;
  }

  content = (
    <div
      className="cursor-pointer h-full w-full text-center flex flex-col items-center justify-center p-2"
      onClick={interactionCallback}
      onKeyPress={interactionCallback}
      role="button"
      tabIndex={0}
    >
      {rankContent}
      {textContent}
    </div>
  );

  return content;
};

TableCell.defaultProps = {
  simplified: undefined,
};

export default TableCell;
