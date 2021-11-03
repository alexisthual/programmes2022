import React from "react";

import AppContext from "src/context/AppContext";
import Search from "src/components/Search";
import { Candidate, Position, Subject } from "src/types";

interface Props {
  candidates?: Candidate[];
  subjects?: Subject[];
  positions?: Position[];
}

const Table: React.FC<Props> = ({ candidates, subjects, positions }) => {
  const { simplified, setContext } = React.useContext(AppContext);
  const positionPerKey = Object.assign(
    {},
    ...positions.map((position: Position) => ({
      [`${position.candidate_id}_${position.subject_id}`]: position,
    })),
  );

  return (
    <div id="main-table">
      <table className="min-w-full h-full">
        <thead>
          <tr>
            <th className="bg-gray-100 z-10 p-3 uppercase">
              <div className="flex-grow">
                <Search />
              </div>
            </th>
            {candidates.map((candidate: Candidate) => (
              <th key={candidate.yamlId} className="bg-gray-50 p-3 uppercase">
                <div className="text-sm text-center font-medium text-gray-900">
                  {candidate.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject: Subject) => (
            <tr key={subject.yamlId}>
              <td className="p-3 whitespace-nowrap">
                <div className="text-sm text-right font-medium text-gray-900">
                  {subject.label}
                </div>
              </td>
              {candidates.map((candidate: Candidate, ckey: number) => {
                const positionId = `${candidate.yamlId}_${subject.yamlId}`;

                let color = null;
                let content = null;

                if (positionId in positionPerKey) {
                  content = (
                    <div className="text-sm text-gray-900">
                      {simplified ? null : positionPerKey[positionId].text}
                    </div>
                  );
                  switch (positionPerKey[positionId].rank) {
                    case -2:
                      color = `red-500`;
                      break;
                    case -1:
                      color = `red-300`;
                      break;
                    case 0:
                      color = `gray-300`;
                      break;
                    case 1:
                      color = `green-300`;
                      break;
                    case 2:
                      color = `green-500`;
                      break;
                    default:
                      break;
                  }
                }

                return (
                  <td key={candidate.yamlId} className="h-full w-full p-0">
                    <div
                      className={`${
                        color !== null ? `bg-${color} cursor-pointer` : ``
                      } h-full w-full p-3 whitespace-nowrap`}
                      onClick={() => {
                        if (positionId in positionPerKey) {
                          setContext({
                            positionId,
                          });
                        }
                      }}
                      onKeyPress={() => {
                        if (positionId in positionPerKey) {
                          setContext({
                            positionId,
                          });
                        }
                      }}
                      role="button"
                      tabIndex={ckey}
                    >
                      {content}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  candidates: [],
  subjects: [],
  positions: [],
};

export default Table;
