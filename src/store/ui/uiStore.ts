import { create } from 'zustand'

interface UiStore {
  isMenuOpen: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

export const useUiStore = create<UiStore>()((set) => ({
  isMenuOpen: false,
  handleOpenMenu: () => set({ isMenuOpen: true }),
  handleCloseMenu: () => set({ isMenuOpen: false })
}))