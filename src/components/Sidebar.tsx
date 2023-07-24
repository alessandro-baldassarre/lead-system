'use client'

import useStore from '@/hooks/useStore'
import useSidebar from '@/stores/useSidebar'
import {
  ArrowDown,
  Bell,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  HelpCircle,
  Home,
  LogOut,
  MessagesSquare,
  Search,
  Settings,
  Users2,
} from 'lucide-react'

export default function Sidebar() {
  const isOpen = useStore(useSidebar, (state) => state.isOpen)
  const isMinimized = useStore(useSidebar, (state) => state.isMinimized)
  const [toggleSidebar, toogleMinimize] = useSidebar((state) => [state.toggleSidebar, state.toggleMinimize])

  return (
    <div>
      {isMinimized && !isOpen && (
        <div
          className="w-52 bg-white shadow-outline rounded-md absolute top-14 -left-1 z-50 no-scrollbar"
          onMouseLeave={() => toogleMinimize()}
        >
          <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <Users2 className="w-4 h-4 rounded-full bg-blue-300" />
              <h1 className="font-normal text-sm">Marcella Cosimano</h1>
            </div>
            {/* Icon */}
            <LogOut className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      )}
      {isOpen && (
        <div className="duration-500 overflow-hidden border-r border-r-gray-200 w-72 max-h-screen h-screen flex flex-col justify-between">
          {/* Top */}
          <div>
            <div className="flex justify-between items-center p-4">
              {/* Logo */}
              <div className="flex items-center gap-1">
                <Users2 className="w-6 h-6 rounded-full bg-blue-300" />
                <h1 className="font-bold">LeadSystem</h1>
              </div>
              {/* Icon */}
              <ChevronsLeft
                className="w-6 h-6 cursor-pointer hover:bg-gray-200 rounded-md"
                onClick={() => {
                  toggleSidebar()
                  toogleMinimize()
                }}
              />
            </div>
            {/* Center */}
            <div className="flex flex-col mt-4">
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
              <div className="flex flex-col gap-2 cursor-pointer border-b border-gray-200 py-4">
                <div className="hover:bg-gray-100 px-6 py-2 flex items-center gap-2 text-xs text-gray-600">
                  <Home className="w-4 h-4 text-gray-600" />
                  Home
                </div>
                <div className="hover:bg-gray-100 px-6 py-2 flex items-center gap-2 text-xs text-gray-600">
                  <Bell className="w-4 h-4 text-gray-600" />
                  Notifiche
                </div>
                <div className="hover:bg-gray-100 px-6 py-2 flex items-center gap-2 text-xs text-gray-600">
                  <ArrowDown className="w-4 h-4 text-gray-600" />
                  Altro
                </div>
              </div>
              <div className="px-6 py-4 uppercase text-xs text-gray-400 font-normal border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                dashboard
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="px-6 py-4 uppercase text-xs text-gray-400 font-normal border-b border-gray-200 bg-gray-100 cursor-pointer flex justify-between items-center">
                leads
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="px-6 py-4 uppercase text-xs text-gray-400 font-normal border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                piano mensile
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="px-6 py-4 uppercase text-xs text-gray-400 font-normal border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                boost lead
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="px-6 py-4 uppercase text-xs text-gray-400 font-normal border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                orientatori
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <Users2 className="w-6 h-6 rounded-full border" />
                <ChevronUp className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex gap-4 items-center">
                <MessagesSquare className="w-4 h-4 text-gray-600 cursor-pointer" />
                <HelpCircle className="w-4 h-4 text-gray-600 cursor-pointer" />
                <Settings className="w-4 h-4 text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
