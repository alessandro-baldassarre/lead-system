'use client'

import { Esito, Lead } from '@/lib/types'
import { Draggable, Droppable, DroppableProvided, DroppableStateSnapshot } from '@hello-pangea/dnd'
import LeadItem from './LeadItem'
import { PlusCircleIcon } from 'lucide-react'

interface LeadListProps {
  leads: Lead[]
  listId: string
  listType: string
  id: Esito
}

const idToColumnTitle: {
  [key in Esito]: string
} = {
  'da contattare': 'Da contattare',
  'in lavorazione': 'In lavorazione',
  'in valutazione': 'In valutazione',
  iscrizione: 'Iscrizione',
  'non interessato': 'Non interessato',
  'non risponde': 'Non risponde',
  'non valido': 'Non valido',
  opportunità: 'Opportunità',
}

export default function LeadList({ leads, listId, listType, id }: LeadListProps) {
  return (
    <Droppable droppableId={listId} type={listType}>
      {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
        <div
          className={`p-2 rounded-md shadow-sm min-w-[250px] ${
            dropSnapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
          }`}
          {...dropProvided.droppableProps}
          ref={dropProvided.innerRef}
        >
          <h2 className="flex justify-between font-light ">
            {idToColumnTitle[id]}
            <span className="text-gray-500 bg-gray-200 rounded-full w-6 h-6 text-xs flex items-center justify-center">
              {leads.length}
            </span>
          </h2>
          <div className="space-y-2">
            {leads.map((lead, index) => (
              <Draggable key={lead._id} draggableId={lead._id} index={index}>
                {(dragProvided) => (
                  <LeadItem
                    lead={lead}
                    index={index}
                    id={id}
                    innerRef={dragProvided.innerRef}
                    draggableProps={dragProvided.draggableProps}
                    dragHandleProps={dragProvided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
            <div>
              <button>
                <PlusCircleIcon className="w-6 h-6 hover:text-green-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  )
}
