export type SpokenLanguage = {
  name: string;
  level: string;
};

export type CoreValue = {
  title: string;
  description: string;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  gpa?: string;
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  summary: string;
  bio: string[];
  location: string;
  nationality: string;
  careerStart: string;
  languages: SpokenLanguage[];
  values: CoreValue[];
  interests: string[];
  education: Education[];
};
