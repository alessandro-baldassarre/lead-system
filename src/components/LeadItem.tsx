'use client'

import { Lead } from '@/lib/types'
import { cn } from '@/lib/utils'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from '@hello-pangea/dnd'
import { CalendarCheck, CheckIcon, MoreHorizontal } from 'lucide-react'
import { LegacyRef, useState } from 'react'

interface LeadItemProps {
  lead: Lead
  id: string
  index: number
  innerRef: LegacyRef<HTMLDivElement> | undefined
  draggableProps: DraggableProvidedDraggableProps
  dragHandleProps: DraggableProvidedDragHandleProps | null
}

export default function LeadItem({ lead, index, id, innerRef, dragHandleProps, draggableProps }: LeadItemProps) {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <div
      ref={innerRef}
      {...dragHandleProps}
      {...draggableProps}
      className="bg-white space-y-2 drop-shadow-md border rounded-md px-2 py-1 flex flex-col gap-2"
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="px-2 pt-4" onMouseOver={() => setIsHovering(true)}>
        <h1 className="text-sm font-light">
          {lead.nome} {lead.cognome}
        </h1>
      </div>
      <span
        className={cn(
          'hover:bg-gray-100 hover:text-gray-400 rounded-md p-1 px-2 text-xs uppercase text-gray-300 flex w-fit',
          {
            hidden: isHovering,
          }
        )}
      >
        + Aggiungi note
      </span>
      {/* CTA */}
      <div className={cn('w-full p-1 py-2 bg-white justify-between hidden', { flex: isHovering })}>
        {/* left */}
        <div className="flex gap-1 items-center">
          <CalendarCheck className="w-5 h-5 text-gray-300  cursor-pointer hover:text-black" strokeWidth="1" />
        </div>
        {/* right */}
        <div className="flex gap-1 items-center">
          <CheckIcon className="w-5 h-5 text-gray-300  cursor-pointer hover:text-green-500" strokeWidth="3" />
          <MoreHorizontal className="w-5 h-5 text-gray-300  cursor-pointer hover:text-black" strokeWidth="1" />
        </div>
      </div>
    </div>
  )
}
