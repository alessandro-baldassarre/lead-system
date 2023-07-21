import Board from '@/components/Board'
import NavBar from '@/components/NavBar'
import Sidebar from '@/components/Sidebar'
import { Lead } from '@/lib/types'

export default async function Home() {
  const leads: Lead[] = await fetch('http:localhost:3000/api').then((res) => res.json())

  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="p-2 flex-1">
          <Board leads={leads} />
        </div>
      </div>
    </main>
  )
}
