export interface Candidate {
  yamlId: string;
  name: string;
  url?: string;
}

export interface Subject {
  yamlId: string;
  label: string;
}

export interface Position {
  candidate_id: string;
  subject_id: string;
  rank: number;
  text: string;
  sources?: Source[];
}

export interface Source {
  date?: string;
  url?: string;
  description?: string;
}
