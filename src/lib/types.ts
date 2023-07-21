export interface Lead {
  id: string
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
