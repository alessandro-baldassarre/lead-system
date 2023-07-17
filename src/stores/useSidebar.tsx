import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarState {
  isOpen: boolean
  isMinimized: boolean
  toggleSidebar: () => void
  toggleMinimize: () => void
}

const useSidebar = create(
  persist<SidebarState>(
    (set) => ({
      isOpen: false,
      isMinimized: false,
      toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
      toggleMinimize: () => set((state) => ({ isMinimized: !state.isMinimized })),
    }),
    { name: 'sidebar' }
  )
)

export default useSidebar
