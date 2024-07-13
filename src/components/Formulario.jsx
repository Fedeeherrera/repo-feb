import { useState } from 'react'
import './globalStyles.css'

function Formulario() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [dni, setDni] = useState('')
  return (
    <form className="bg-white shadow-md rounded-lg  py-10 px-5 w-72 flex flex-col items-center gap-2">
      <section>
        <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor="nombre">Nombre</label>
        <input value={nombre} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="nombre" />
      </section>

      <section>
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="apellido">Apellido</label>
        <input value={apellido} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="apellido" />
      </section>

      <section>
        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="dni">DNI</label>
        <input value={dni} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="dni" />
      </section>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">
          Button
        </button>
      </div>

    </form>
  )
}

export default Formulario