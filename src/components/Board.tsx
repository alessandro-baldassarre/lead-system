'use client'

import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd'
import Column from './Column'
import useBoard from '@/stores/useBoard'
import type { Board, Column as ColumnType } from '@/lib/types'
import { useEffect } from 'react'

export default function Board() {
  // const board = useStore(useBoard, (state) => state.board)
  const [board, getBoard, setBoard] = useBoard((state) => [state.board, state.getBoard, state.setBoard])

  useEffect(() => {
    getBoard()
  }, [getBoard])

  function onDragEnd(result: DropResult) {
    if (!board) return

    const { destination, source, type } = result

    // check if user dragged the item outside the board
    if (!destination) return

    // handle COLUMN drag and drop
    if (type === 'COLUMN') {
      const entries = Array.from(board.columns.entries())
      const [removed] = entries.splice(source.index, 1)
      entries.splice(destination.index, 0, removed)
      const newColumns = new Map(entries)
      setBoard({ ...board, columns: newColumns })
    }

    // handle LEAD drag and drop
    const columns = Array.from(board.columns)
    const startIndex = columns[Number(source.droppableId)]
    const endIndex = columns[Number(destination.droppableId)]

    if (!startIndex || !endIndex) return
    const startColumn: ColumnType = {
      id: startIndex[0],
      leads: startIndex[1].leads,
    }
    const endColumn: ColumnType = {
      id: endIndex[0],
      leads: endIndex[1].leads,
    }

    if (!startColumn || !endColumn) return
    if (source.index === destination.index && startColumn === endColumn) return

    const newLeads = startColumn.leads
    const [moved] = newLeads.splice(source.index, 1)

    if (startColumn.id === endColumn.id) {
      newLeads.splice(destination.index, 0, moved)
      const newColumn: ColumnType = {
        id: startColumn.id,
        leads: newLeads,
      }
      const newBoard: Board = {
        columns: new Map(board.columns.set(startColumn.id, newColumn)),
      }
      setBoard(newBoard)
    } else {
      const newEndLeads = endColumn.leads
      newEndLeads.splice(destination.index, 0, moved)
      const newStartColumn: ColumnType = {
        id: startColumn.id,
        leads: newLeads,
      }
      const newEndColumn: ColumnType = {
        id: endColumn.id,
        leads: newEndLeads,
      }
      const newBoard: Board = {
        columns: new Map(board.columns.set(startColumn.id, newStartColumn).set(endColumn.id, newEndColumn)),
      }
      setBoard(newBoard)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(provided) => (
          <div className="flex gap-5" ref={provided.innerRef} {...provided.droppableProps}>
            {board &&
              board.columns &&
              board.columns.size > 0 &&
              Array.from(board.columns.entries()).map(([id, column], index) => (
                <Column key={id} id={id} leads={column.leads} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
