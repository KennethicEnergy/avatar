import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ApplicationStore } from '../constants/types'

export const useAppStore = create<ApplicationStore>()(
  persist(
    (set) => ({
      lang: 'en',
      theme: null,
      currentModal: null,
      isModalOpen: false,
      isPageLoading: false,
      isAlertOpen: false,
      isAlertDismissable: true,
      alertMessage: null,
      alertType: null,
      setTheme: (theme: string | null) => set({ theme }),
      setIsAlertOpen: (open: boolean) => set({ isAlertOpen: open }),
      setAlert(type: string | null, message: string | null, isDismissable: boolean = true) {
        set({ alertType: type, alertMessage: message, isAlertDismissable: isDismissable })
        setTimeout(() =>
          set({ alertType: null, alertMessage: null, isAlertDismissable: true, isAlertOpen: false })
        , 5000);
      },
      setLang: (lang: string) => set({ lang }),
      setModal: (view: number | null) => set({ currentModal: view }),
      setIsModalOpen: (open: boolean) => set({ isModalOpen: open }),
      setIsPageLoading: (loading: boolean) => set({ isPageLoading: loading }),
      resetAlert: () => set({ alertType: null, alertMessage: null, isAlertDismissable: true, isAlertOpen: false }),
      resetAppStore: () => set({ lang: 'en', currentModal: null, isModalOpen: false, isPageLoading: false }),
    }),
    { name: 'application-store', storage: createJSONStorage(() => localStorage) },
  ),
)