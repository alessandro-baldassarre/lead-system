'use client'

import useStore from '@/hooks/useStore'
import useSidebar from '@/stores/useSidebar'
import { ChevronsRight, PanelLeftOpen } from 'lucide-react'

export default function NavBar() {
  const isMinimized = useStore(useSidebar, (state) => state.isMinimized)
  const isOpen = useStore(useSidebar, (state) => state.isOpen)
  const [toggleSidebar, toogleMinimize] = useSidebar((state) => [state.toggleSidebar, state.toggleMinimize])
  return (
    <nav className="p-2 border-b border-b-gray-200 flex h-12 w-full">
      {!isMinimized && !isOpen && (
        <PanelLeftOpen className="p-2 w-8 h-8 cursor-pointer" onMouseOver={() => toogleMinimize()} />
      )}
      {isMinimized && !isOpen && (
        <ChevronsRight
          className="bg-gray-200 rounded-md duration-500 p-1 w-8 h-8"
          onClick={() => {
            toggleSidebar()
          }}
        />
      )}
    </nav>
  )
}
