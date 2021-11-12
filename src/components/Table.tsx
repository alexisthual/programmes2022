import React from "react";

import AppContext from "src/context/AppContext";
import CandidateAvatar from "src/components/CandidateAvatar";
import Search from "src/components/Search";
import TableCell from "src/components/TableCell";
import { Candidate, Position, Subject } from "src/types";

interface Props {
  candidates?: Candidate[];
  rows?: Subject[];
  positions?: Position[];
}

const Table: React.FC<Props> = ({ candidates, rows, positions }) => {
  const { simplified, setContext } = React.useContext(AppContext);
  const positionPerKey = Object.assign(
    {},
    ...positions.map((position: Position) => ({
      [`${position.candidateId}_${position.subjectId}`]: position,
    })),
  );

  let nDomains = 1;
  const tableRows = [];
  rows.forEach((row: Subject) => {
    let newRow = null;
    if (row.isDomain) {
      nDomains = 1;
      newRow = (
        <tr key={row.label} className="row-domain">
          <td className="px-3 py-1">
            <div className="text-sm text-right font-bold text-gray-900">
              {row.label}
            </div>
          </td>
          <td colSpan={candidates.length} />
        </tr>
      );
    } else {
      nDomains += 1;
      newRow = (
        <tr
          key={row.id}
          className={`row-subject ${nDomains % 2 === 0 ? `even` : `odd`}`}
        >
          <td className="p-3">
            <div className="text-sm text-right font-medium text-gray-900">
              {row.label}
            </div>
          </td>
          {candidates.map((candidate: Candidate) => {
            const positionId = `${candidate.yamlId}_${row.id}`;

            let content = null;

            if (positionId in positionPerKey) {
              content = (
                <TableCell
                  rank={positionPerKey[positionId].rank}
                  text={positionPerKey[positionId].text}
                  simplified={simplified}
                  interactionCallback={() => {
                    setContext({ positionId });
                  }}
                />
              );
            }

            return (
              <td key={candidate.yamlId} className="h-full w-full p-0">
                {content}
              </td>
            );
          })}
        </tr>
      );
    }
    tableRows.push(newRow);
  });

  return (
    <div id="main-table">
      <table className="h-full">
        <thead>
          <tr>
            <th className="bg-gray-100 z-10 p-3 uppercase">
              <Search />
            </th>
            {candidates.map((candidate: Candidate) => (
              <th key={candidate.yamlId} className="bg-gray-50 p-3 uppercase">
                <div className="flex flex-row gap-1 items-center">
                  <CandidateAvatar id={candidate.yamlId} />
                  <div className="text-sm font-normal text-center text-gray-900">
                    {candidate.name}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  candidates: [],
  rows: [],
  positions: [],
};

export default Table;
