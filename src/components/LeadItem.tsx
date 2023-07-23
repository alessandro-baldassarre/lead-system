'use client'

import { Lead } from '@/lib/types'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from '@hello-pangea/dnd'
import { LegacyRef } from 'react'

interface LeadItemProps {
  lead: Lead
  id: string
  index: number
  innerRef: LegacyRef<HTMLDivElement> | undefined
  draggableProps: DraggableProvidedDraggableProps
  dragHandleProps: DraggableProvidedDragHandleProps | null
}

export default function LeadItem({ lead, index, id, innerRef, dragHandleProps, draggableProps }: LeadItemProps) {
  return (
    <div
      ref={innerRef}
      {...dragHandleProps}
      {...draggableProps}
      className="bg-white space-y-2 drop-shadow-md rounded-md"
    >
      <h1>{lead.cognome}</h1>
    </div>
  )
}
