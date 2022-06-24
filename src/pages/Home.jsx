import { Card } from "../components/Card"

function Home() {

  return (
    <main className="flex min-h-screen justify-center overflow-hidden bg-gray-800 py-6 sm:py-12 ">
      <div className="container mx-auto rounded flex flex-col items-center bg-gray-800">
        <h1 className="text-5xl text-cyan-50 mt-6 mb-6">
          Lista de Presença
        </h1>
        <input 
          className="w-1/2 border-none rounded mt-6 mb-6 py-3 px-2 text-xl focus:outline-none"
          type="text" 
          placeholder="Digite o nome..."
          />
        <button 
          className="bg-blue-600 w-1/2 py-3 text-xl font-bold text-cyan-50 mb-16 rounded"
          type="button"
        > 
          Adicionar
        </button>

        <Card name="teste nome" time="10:15:24"/>
        <Card name="teste nome2" time="10:15:24"/>
      </div>
    </main>
  )
}

export default Home
