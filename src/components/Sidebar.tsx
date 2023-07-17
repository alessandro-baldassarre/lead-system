'use client'

import useStore from '@/hooks/useStore'
import useSidebar from '@/stores/useSidebar'
import { ChevronsLeft, Search, Users2 } from 'lucide-react'

export default function Sidebar() {
  const isOpen = useStore(useSidebar, (state) => state.isOpen)
  const isMinimized = useStore(useSidebar, (state) => state.isMinimized)
  const [toggleSidebar, toogleMinimize] = useSidebar((state) => [state.toggleSidebar, state.toggleMinimize])

  return (
    <div>
      {isMinimized && !isOpen && (
        <div
          className="w-72 h-80 bg-white shadow-lg rounded-md absolute top-12 left-1"
          onMouseLeave={() => toogleMinimize()}
        >
          <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <Users2 className="w-6 h-6 rounded-full bg-blue-300" />
              <h1 className="font-bold">LeadSystem</h1>

              <div className="flex items-center gap-1">
                <Search className="w-3 h-3  font-semibold" />
                <p className="text-xs">Cerca</p>

                <p className="text-sm text-muted-foreground">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center rounded bg-muted px-1.5 font-mono text-xs font-medium opacity-100">
                    <span className="text-base">⌘</span>K
                  </kbd>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="duration-500 overflow-hidden border-r border-r-gray-200 w-72 h-screen">
          {/* Top */}
          <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <Users2 className="w-6 h-6 rounded-full bg-blue-300" />
              <h1 className="font-bold">LeadSystem</h1>
            </div>
            {/* Icon */}
            <ChevronsLeft
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                toggleSidebar()
                toogleMinimize()
              }}
            />
          </div>
          {/* Center */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="bg-gray-100 mx-4 flex justify-between h-8 rounded-md cursor-pointer items-center px-2 text-gray-400 hover:text-black">
              <div className="flex gap-1 items-center">
                <Search className="w-3 h-3  font-semibold" />
                <p className="text-xs">Cerca</p>
              </div>
              <p className="text-sm text-muted-foreground">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center rounded bg-muted px-1.5 font-mono text-xs font-medium opacity-100">
                  <span className="text-base">⌘</span>K
                </kbd>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="hover:bg-slate-200">Home</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
