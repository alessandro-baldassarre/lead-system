import Board from '@/components/Board'
import NavBar from '@/components/NavBar'
import Sidebar from '@/components/Sidebar'

export default async function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="p-2 flex-1">
          <Board />
        </div>
      </div>
    </main>
  )
}
