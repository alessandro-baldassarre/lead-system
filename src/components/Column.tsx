'use client'

import { Lead } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import LeadList from './LeadList'

interface ColumnProps {
  leads: Lead[]
  columnType: string
  index: number
}

export default function Column({ leads, columnType, index }: ColumnProps) {
  return (
    <Draggable draggableId={columnType} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        // Container
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="flex flex-col"
        >
          {/* Header */}
          <div
            className={cn('flex items-center justify-center rounded-tr-md round-tl-md hover:bg-slate-300', {
              'bg-slate-300 transition-colors ease-in': snapshot.isDragging,
            })}
          >
            {/* Title */}
            <h4
              {...provided.dragHandleProps}
              aria-label={`${columnType} lead list`}
              className={cn(
                'p-2 transition-colors ease-in-out flex-grow-1 select-none relative focus:outline-2 focus:outline-offset-2',
                { 'bg-slate-300': snapshot.isDragging }
              )}
            >
              {columnType}
            </h4>
            {/* Lead */}
          </div>
          <LeadList />
        </div>
      )}
    </Draggable>
  )
}
