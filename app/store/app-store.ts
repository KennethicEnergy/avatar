import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ApplicationStore } from '../constants/types'

export const useAppStore = create<ApplicationStore>()(
  persist(
    (set) => ({
      lang: 'en',
      currentModal: null,
      isModalOpen: false,
      isPageLoading: false,
      setLang: (lang: string) => set({ lang }),
      setModal: (view: number | null) => set({ currentModal: view }),
      setIsModalOpen: (open: boolean) => set({ isModalOpen: open }),
      setIsPageLoading: (loading: boolean) => set({ isPageLoading: loading }),
      resetAppStore: () => set({ lang: 'en', currentModal: null, isModalOpen: false, isPageLoading: false }),
    }),
    { name: 'application-store', storage: createJSONStorage(() => localStorage) },
  ),
)