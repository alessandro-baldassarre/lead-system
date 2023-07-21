'use client'

import { Esito, Lead } from '@/lib/types'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'
import Column from './Column'

export default function Board({ leads }: { leads: Lead[] }) {
  function handleDragEnd() {
    return (result: DropResult) => {
      console.log(result)
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd()}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div className="flex overflow-x-auto overflow-y-hidden" {...provided.droppableProps} ref={provided.innerRef}>
            {(Object.keys(Esito) as Array<keyof typeof Esito>).map((esito, index) => (
              <Column key={esito} leads={leads} columnType={esito} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
