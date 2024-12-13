export type TimelineItemProps = {
  title: string;
  company: string;
  date: string;
  projectUrl: string | null;
  companyUrl: string | null;
  description: string | Array<string>;
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

export interface ApplicationStore {
  lang: string;
  alertMessage: string | null;
  theme: string;
  currentModal: number | null;
  isModalOpen: boolean;
  isPageLoading: boolean;
  isAlertOpen: boolean;
  alertType?: string | null;
  isAlertDismissable?: boolean;
  setTheme(theme: string): void;
  setLang: (lang: string) => void;
  setAlert: (type: string | null, message: string | null, isDismissable?: boolean) => void;
  setModal: (view: number| null) => void;
  setIsModalOpen: (open: boolean) => void;
  setIsPageLoading: (loading: boolean) => void;
  setIsAlertOpen: (open: boolean) => void;
  resetAppStore: () =>  void;
  resetAlert: () => void;
}