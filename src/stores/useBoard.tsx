import { Board, Column, Esito } from '@/lib/types'
import { getLeadsGroupedByEsito } from '@/lib/utils'
import { create } from 'zustand'

interface BoardState {
  board: Board
  getBoard: () => void
  setBoard: (board: Board) => void
}

const useBoard = create<BoardState>((set) => ({
  board: { columns: new Map<Esito, Column>() },
  getBoard: async () => {
    const board = await getLeadsGroupedByEsito()
    set({ board })
  },
  setBoard: (board) => set({ board }),
}))

export default useBoard
