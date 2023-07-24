'use client'

import { Esito, Lead } from '@/lib/types'
import { Draggable, DraggableProvided } from '@hello-pangea/dnd'
import LeadList from './LeadList'

interface ColumnProps {
  leads: Lead[]
  id: Esito
  index: number
}

export default function Column({ leads, id, index }: ColumnProps) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided: DraggableProvided) => (
        <div
          className="flex flex-col"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <LeadList listId={index.toString()} listType="LEAD" leads={leads} id={id} />
        </div>
      )}
    </Draggable>
  )
}
