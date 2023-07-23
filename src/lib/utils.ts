import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Board, Column, Esito, Lead } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getLeadsGroupedByEsito(): Promise<Board> {
  const response = await fetch('/api')
  const leads: Lead[] = await response.json()

  const columns = leads.reduce((acc, lead) => {
    const column = acc.get(lead.esito) || {
      id: lead.esito,
      leads: [],
    }
    column.leads.push(lead)
    acc.set(lead.esito, column)

    return acc
  }, new Map<Esito, Column>())

  // if columns doesn't have all the Esito keys, add them with empty leads
  Object.values(Esito).forEach((esito) => {
    if (!columns.has(esito)) {
      columns.set(esito, {
        id: esito,
        leads: [],
      })
    }
  })

  const board: Board = {
    columns,
  }

  return board
}
