import type { DraggableId, DraggableLocation } from '@hello-pangea/dnd'

export interface Board {
  columns: Map<Esito, Column>
}

export interface Column {
  id: Esito
  leads: Lead[]
}
export interface Lead {
  _id: string
  nome: string
  cognome: string
  email: string
  telefono: string
  provincia: string
  esito: Esito
  data: string
  orientatore: string
}

export enum Esito {
  'da contattare' = 'da contattare',
  'non risponde' = 'non risponde',
  'in lavorazione' = 'in lavorazione',
  'non valido' = 'non valido',
  'non interessato' = 'non interessato',
  'opportunità' = 'opportunità',
  'in valutazione' = 'in valutazione',
  'iscrizione' = 'iscrizione',
}

export interface Dragging {
  id: DraggableId
  location: DraggableLocation
}

export interface LeadMap {
  [key: string]: Lead[]
}
