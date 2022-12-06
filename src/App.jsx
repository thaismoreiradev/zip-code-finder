import { useState } from 'react'
import { api } from "./api"
import { ZipCodeInfo } from './components/ZipCodeInfo'
import { Input } from './components/Input'
import { Footer } from './components/Footer'




export const App = () => {

  const [input, setInput] = useState("")
  const [cep, setCep] = useState(null)
  const [messageError, setMessageError] = useState("")


  const handleSearch = async (e) => {
    e.preventDefault()

    if (input === "") {
      setMessageError("Fill with a brazilian zip code")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setMessageError("")
      setInput("")
    } catch (error) {
      setMessageError("Invalid, fill with a brazilian zip code")
      console.error(error)
      setInput("")
    }
  }


  const toReloadPage = () => {
    location.reload()
  }




  return (
   
   <main className='flex items-center justify-center bg-zinc-800'>

      {/* central container */}
      <div className='flex flex-col w-screen h-screen max-w-[600px] max-h-[750px] p-2 items-center justify-between'>


        {/* container for all zip code details: title, input and result */}
        <div className='flex flex-col h-full items-center pt-10 xs:pt-20 xs3:pt-28 gap-4'>

          {/* title */}
          <h1 className='font-rozha text-4xl xs:text-4xl xs2:text-5xl text-white cursor-pointer' onClick={toReloadPage}>Zip code finder</h1>

          {/* input for zipcode */}
          <Input
            input={input}
            setInput={setInput}
            handleSearch={handleSearch}
          />

          {/*  message for input errors */}
          {messageError !== "" &&
            <p className='text-red-600 text-xs'>{messageError}</p>
          }

          {/* informations about the zip code founded */}
          {cep !== null &&
            <ZipCodeInfo cep={cep} />
          }


        </div>

        <Footer />
      </div>
    </main>
  )
}


