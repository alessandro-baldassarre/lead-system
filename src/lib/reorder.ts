import type { Lead, LeadMap } from './types'
import type { DraggableLocation } from '@hello-pangea/dnd'

// a little function to help us with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export default reorder

interface ReorderQuoteLeadArgs {
  leadMap: LeadMap
  source: DraggableLocation
  destination: DraggableLocation
}

export interface ReorderLeadMapResult {
  leadMap: LeadMap
}

export const reorderLeadMap = ({ leadMap, source, destination }: ReorderQuoteLeadArgs): ReorderLeadMapResult => {
  const current: Lead[] = [...leadMap[source.droppableId]]
  const next: Lead[] = [...leadMap[destination.droppableId]]
  const target: Lead = current[source.index]

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered: Lead[] = reorder(current, source.index, destination.index)
    const result: LeadMap = {
      ...leadMap,
      [source.droppableId]: reordered,
    }
    return {
      leadMap: result,
    }
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1)
  // insert into next
  next.splice(destination.index, 0, target)

  const result: LeadMap = {
    ...leadMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  }

  return {
    leadMap: result,
  }
}

interface List<T> {
  id: string
  values: T[]
}

interface MoveBetweenArgs<T> {
  list1: List<T>
  list2: List<T>
  source: DraggableLocation
  destination: DraggableLocation
}

interface MoveBetweenResult<T> {
  list1: List<T>
  list2: List<T>
}

export function moveBetween<T>({ list1, list2, source, destination }: MoveBetweenArgs<T>): MoveBetweenResult<T> {
  const newFirst = Array.from(list1.values)
  const newSecond = Array.from(list2.values)

  const moveFrom = source.droppableId === list1.id ? newFirst : newSecond
  const moveTo = moveFrom === newFirst ? newSecond : newFirst

  const [moved] = moveFrom.splice(source.index, 1)
  moveTo.splice(destination.index, 0, moved)

  return {
    list1: {
      ...list1,
      values: newFirst,
    },
    list2: {
      ...list2,
      values: newSecond,
    },
  }
}
