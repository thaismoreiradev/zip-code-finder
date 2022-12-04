import { useState } from 'react'
import { api } from "./api"



export const App = () => {


  const [input, setInput] = useState("")
  const [cep, setCep] = useState(null)

  const handleSearch = async () => {
    if (input === "") {
      alert("Fill with the zip code")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    }catch {
      alert("invallid")
      setInput("")
    }
  }




  return (
    <main className='bg-blue-200 flex flex-col'>

      {/* principal title */}
      <h1 className='bg-slate-600 xs:bg-red-400'>ZIP CODE FINDER</h1>

      {/* input for zipcode */}
      <div>
        <input
          type="text"
          placeholder='Enter a zip code here'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className='flex flex-col'
          onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
          Search
        </button>

      </div>

      {/* informations about the zip code */}


    {cep !== null && 
        <div>
          <h2>CEP: {cep.cep}</h2>
          <p>{cep.logradouro}</p>
          <p>{cep.complemento}</p>
          <p>{cep.bairro}</p>
          <p>{cep.localidade}</p>
          <p>{cep.uf}</p>
        </div>
    }







      <footer className="pb-1 text-x">
        <p>Developed by
          <a href="https://github.com/thaismoreiradev" target="_blank" rel="noopener noreferrer">Thais
            Moreira
          </a>
        </p>
      </footer>

    </main>

  )
}


