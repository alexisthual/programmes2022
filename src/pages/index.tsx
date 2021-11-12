import React, { useState } from "react";
import { graphql, PageProps } from "gatsby";

import AppContext from "src/context/AppContext";
import PositionPanel from "src/components/PositionPanel";
import Table from "src/components/Table";
import SettingsButton from "src/components/SettingsButton";
import SettingsPanel from "src/components/SettingsPanel";
import { Candidate, Position, Subject } from "src/types";

const Home: React.FC<PageProps> = ({ data }) => {
  const candidates: Candidate[] = data.allCandidatesYaml.edges.map(
    (node: any) => node.node,
  );

  const tableRows: Subject[] = [];
  const subjects: Subject[] = [];
  data.allSubjectsYaml.edges.forEach((node: any) => {
    tableRows.push({ isDomain: true, label: node.node.title });
    node.node.subjects.forEach((subject: Subject) => {
      subjects.push(subject);
      tableRows.push({ isDomain: false, ...subject });
    });
  });

  const positions = data.allPositionsYaml.edges.map((node: any) => {
    const info = node.node.parent.name.split(`_`);
    return {
      ...node.node,
      candidateId: info[0],
      subjectId: info[1],
    };
  });

  const positionsPerKey = Object.assign(
    {},
    ...positions.map((position: Position) => ({
      [`${position.candidateId}_${position.subjectId}`]: position,
    })),
  );

  const [showSettings, setShowSettings] = useState(false);
  const { positionId, deleteContextKey } = React.useContext(AppContext);

  let positionCandidate = null;
  let positionSubject = null;

  if (positionId !== undefined) {
    positionCandidate = candidates.filter(
      (candidate: Candidate) =>
        candidate.yamlId === positionsPerKey[positionId].candidateId,
    )[0].name;
    positionSubject = subjects.filter(
      (subject: Subject) =>
        subject.id === positionsPerKey[positionId].subjectId,
    )[0].label;
  }

  return (
    <main className="flex flex-col">
      <Table candidates={candidates} rows={tableRows} positions={positions} />
      <SettingsButton onClick={() => setShowSettings(true)} />
      {showSettings ? (
        <SettingsPanel onClose={() => setShowSettings(false)} />
      ) : null}
      {positionId !== undefined ? (
        <PositionPanel
          position={positionsPerKey[positionId]}
          candidate={positionCandidate}
          subject={positionSubject}
          onClose={() => deleteContextKey(`positionId`)}
        />
      ) : null}
    </main>
  );
};

export const query = graphql`
  {
    allCandidatesYaml {
      edges {
        node {
          yamlId
          name
          url
        }
      }
    }
    allSubjectsYaml {
      edges {
        node {
          title
          subjects {
            id
            label
          }
        }
      }
    }
    allPositionsYaml {
      edges {
        node {
          rank
          text
          sources {
            date(formatString: "ddd DD MMMM YYYY", locale: "fr")
            url
            description
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`;

export default Home;
