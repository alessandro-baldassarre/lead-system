'use client'

import { Esito, Lead } from '@/lib/types'
import { Draggable, Droppable, DroppableProvided, DroppableStateSnapshot } from '@hello-pangea/dnd'
import LeadItem from './LeadItem'

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

const borderColors: {
  [key in Esito]: string
} = {
  'da contattare': 'border-red-400',
  'in lavorazione': 'border-yellow-400',
  'in valutazione': 'border-green-400',
  iscrizione: 'border-blue-400',
  'non interessato': 'border-indigo-400',
  'non risponde': 'border-purple-700',
  'non valido': 'border-pink-400',
  opportunità: 'border-violet-300',
}

export default function LeadList({ leads, listId, listType, id }: LeadListProps) {
  return (
    <Droppable droppableId={listId} type={listType}>
      {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
        <div
          className={`p-2 rounded-md min-w-[250px] ${dropSnapshot.isDraggingOver ? 'bg-neutral-50' : 'bg-white/50'}`}
          {...dropProvided.droppableProps}
          ref={dropProvided.innerRef}
        >
          <div
            className={`flex gap-2 font-semibold text-xs h-12 items-center uppercase p-3 shadow-md mb-10 rounded-md border-t-2 ${borderColors[id]}`}
          >
            {idToColumnTitle[id]}
            <span className="text-gray-500 border rounded-full w-6 h-5 text-xs flex items-center justify-center font-normal text-[10px]">
              {leads.length}
            </span>
          </div>
          <div className="space-y-3">
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
            <div className="opacity-0 hover:opacity-100 w-full px-2 py-2 font-light text-sm">
              <button>+ Nuovo lead</button>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  )
}
