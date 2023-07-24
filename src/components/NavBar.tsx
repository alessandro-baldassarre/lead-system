'use client'

import useStore from '@/hooks/useStore'
import { cn } from '@/lib/utils'
import useSidebar from '@/stores/useSidebar'
import {
  Calendar,
  ChevronsRight,
  ChevronsUpDownIcon,
  Columns,
  FileText,
  LayersIcon,
  List,
  ListFilterIcon,
  MoreHorizontalIcon,
  PanelLeftOpen,
  SearchIcon,
  Share2,
  Users,
} from 'lucide-react'

export default function NavBar() {
  const isMinimized = useStore(useSidebar, (state) => state.isMinimized)
  const isOpen = useStore(useSidebar, (state) => state.isOpen)
  const [toggleSidebar, toogleMinimize, setIsMinimized] = useSidebar((state) => [
    state.toggleSidebar,
    state.toggleMinimize,
    state.setIsMinimized,
  ])
  return (
    <>
      <nav
        className={cn(
          'p-2 border-b border-b-gray-200 flex items-center justify-between h-12',
          { 'w-screen': !isOpen },
          { 'w-[calc(100vw-288px)]': isOpen }
        )}
      >
        {/* left nav */}
        <div className="flex items-center">
          <div>
            {!isMinimized && !isOpen && (
              <PanelLeftOpen className="p-2 w-8 h-8 cursor-pointer" onMouseOver={() => toogleMinimize()} />
            )}
            {isMinimized && !isOpen && (
              <ChevronsRight
                className="bg-gray-200 rounded-md duration-500 p-1 w-8 h-8 cursor-pointer"
                onClick={() => {
                  toggleSidebar()
                }}
              />
            )}
          </div>
          {/* Menus */}
          <div className="flex items-center px-2 gap-3 h-full" onMouseOver={() => setIsMinimized(false)}>
            <h1 className="font-semibold select-none">Marcella Cosimano</h1>
            <div className="h-5 border-r border-r-gray-200" />
            <div className="cursor-pointer h-full flex items-center gap-1 text-sm">
              <List className="w-4 h-4 text-gray-600 font-bold cursor-pointer" />
              Elenco
            </div>
            <div className="h-5 border-r border-r-gray-200" />
            <div className="cursor-pointer h-full flex items-center gap-1 text-sm font-semibold">
              <Columns className="w-4 h-4 text-gray-600 font-bold cursor-pointer" />
              Bacheca
            </div>
            <div className="h-5 border-r border-r-gray-200" />
            <div className="cursor-pointer h-full flex items-center gap-1 text-sm">
              <Calendar className="w-4 h-4 text-gray-600 font-bold cursor-pointer" />
              Calendario
            </div>
            <div className="h-5 border-r border-r-gray-200" />
            <div className="cursor-pointer h-full flex items-center gap-1 text-sm">
              <FileText className="w-4 h-4 text-gray-600 font-bold cursor-pointer" />
              Doc
            </div>
            <div className="h-5 border-r border-r-gray-200" />
          </div>
        </div>
        {/* righ nav */}
        <div className="flex p-1 px-2 gap-1 hover:bg-gray-200 items-center rounded-lg cursor-pointer border text-xs mr-2">
          <Share2 className="w-3 h-3 text-gray-600 font-semibold cursor-pointer" />
          Scarica report
        </div>
      </nav>
      {/* bottom nav */}
      <div
        className={cn(
          'p-2 border-b border-b-gray-200 flex h-9 justify-between items-center',
          { 'w-screen': !isOpen },
          { 'w-[calc(100vw-288px)]': isOpen }
        )}
      >
        {/* Searh  */}
        <div className="w-48 flex items-center">
          <label htmlFor="searh">
            <SearchIcon className="p-2 w-7 h-7 text-gray-600 font-semibold cursor-pointer" />
          </label>
          <input
            type="text"
            className="flex-1 focus:outline-none font-light text-xs  p-0"
            placeholder="Cerca tra i leads..."
            id="searh"
          />
          <div className="flex p-1 gap-1 hover:bg-gray-200 items-center rounded-md cursor-pointer mr-1">
            <MoreHorizontalIcon className="w-4 h-4 text-gray-600 font-bold cursor-pointer" />
          </div>
          <div className="h-4 border-r border-r-gray-200" />
        </div>
        {/* Filter */}
        <div className="flex items-center text-xs gap-3 mr-2">
          <div className="flex p-1 px-2 gap-1 hover:bg-gray-200 items-center rounded-md cursor-pointer">
            <ListFilterIcon className="w-3 h-3 text-gray-600 font-semibold cursor-pointer" />
            Filtro
          </div>
          <div className="flex p-1 px-2 gap-1 hover:bg-gray-200 items-center rounded-md cursor-pointer">
            <ChevronsUpDownIcon className="w-3 h-3 text-gray-600 font-semibold cursor-pointer" />
            Ordina per
          </div>
          <div className="flex p-1 px-2 gap-1 hover:bg-gray-200 items-center rounded-md cursor-pointer">
            <LayersIcon className="w-3 h-3 text-gray-600 font-semibold cursor-pointer" />
            Raggruppa per: Esito
          </div>
          <div className="flex p-1 px-2 gap-1 hover:bg-gray-200 items-center rounded-md cursor-pointer">
            <Users className="w-3 h-3 text-gray-600 font-semibold cursor-pointer" />
            Orientatori
          </div>
          <div className="flex p-1 gap-1 hover:bg-gray-200 items-center rounded-md cursor-pointer">
            <MoreHorizontalIcon className="w-4 h-4 text-gray-600 font-bold cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  )
}
