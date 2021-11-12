export interface Candidate {
  yamlId: string;
  name: string;
  url?: string;
}

export interface Subject {
  isDomain: boolean;
  id?: string;
  label: string;
}

export interface Position {
  candidateId: string;
  subjectId: string;
  rank: number;
  text: string;
  sources?: Source[];
}

export interface Source {
  date?: string;
  url?: string;
  description?: string;
}
