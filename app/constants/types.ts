export type TimelineItemProps = {
  title: string;
  company: string;
  date: string;
  projectUrl?: string;
  companyUrl?: string;
  description?: string | Array<string>;
}

export type TimelineData = {
  id: number;
  title: string;
  company: string;
  companyUrl: string | null;
  date: string;
  description: string | string[];
  projectUrl: string | null;
  projectImages: Array<string> | null;
  projectGif: string | null;
  projectName: string | null;
  projectDescription: string | null;
  projectTechStack: Array<string> | null;
}