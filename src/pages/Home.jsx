import { useState } from "react"
import { Card } from "../components/Card"

function Home() {

  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <main className="flex min-h-screen justify-center overflow-hidden bg-gray-800 py-6 sm:py-12 ">
      <div className="container mx-auto rounded flex flex-col items-center bg-gray-800">
        <header className="flex justify-between w-3/4 sm:w-2/3 lg:w-1/2">
          <h1 className="sm:text-4xl text-4xl text-cyan-50 mt-6 mb-6">
            Lista de Presença
          </h1>

          <div className="flex items-center">
            <strong className="text-cyan-50 mr-3 sm:text-1xl">
              Felipe Ferreira
            </strong>
            <img className="w-16 rounded-full" src="https://github.com/felipeferreirass.png"/>
          </div>
          
        </header>

        <input 
          className="w-3/4 sm:w-2/3 lg:w-1/2 border-none rounded mt-6 mb-6 py-3 px-2 text-xl focus:outline-none"
          type="text" 
          placeholder="Digite o nome..."
          onChange={e => setStudentName(e.target.value)}
          />
        <button 
          className="bg-blue-600 w-3/4 sm:w-2/3 lg:w-1/2 py-3 text-xl font-bold text-cyan-50 mb-16 rounded"
          type="button"
          onClick={handleAddStudent}
        > 
          Adicionar
        </button>

        {students.map(student => (
          <Card key={student.time} name={student.name} time={student.time}/>
        ))}
      </div>
    </main>
  )
}

export default Home
