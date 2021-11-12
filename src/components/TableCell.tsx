import React from "react";

import { PositionIcon } from "src/components/PositionIcon";

interface Props {
  rank: number;
  text?: string;
  simplified?: boolean;
  interactionCallback: () => void;
}

const TableCell: React.FC<Props> = ({
  rank,
  text,
  simplified,
  interactionCallback,
}) => {
  let content = null;
  const textContent = simplified ? null : (
    <div className="mt-2 text-sm font-base leading-tight">{text}</div>
  );

  content = (
    <div
      className="cursor-pointer h-full w-full text-center flex flex-col items-center justify-center p-2"
      onClick={interactionCallback}
      onKeyPress={interactionCallback}
      role="button"
      tabIndex={0}
    >
      <PositionIcon rank={rank} />
      {textContent}
    </div>
  );

  return content;
};

TableCell.defaultProps = {
  simplified: undefined,
};

export default TableCell;
