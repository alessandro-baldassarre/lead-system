import Board from '@/components/Board'
import NavBar from '@/components/NavBar'
import Sidebar from '@/components/Sidebar'

export default async function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <NavBar />
        <div className="p-2 flex flex-1 overflow-x-auto">
          <Board />
        </div>
      </div>
    </main>
  )
}
