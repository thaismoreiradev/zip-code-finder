import { useState } from 'react'


export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-blue-200 flex flex-col'>
      
      {/* principal title */}
      <h1 className='bg-slate-600 xs:bg-red-400'>ZIP CODE FINDER</h1>
      
      {/* input for zipcode */}
      <div>
        <input type="text"
        placeholder='Enter a zip code here'/>

        <button className='flex flex-col'>
          <i class="fa-solid fa-magnifying-glass"></i>
          Search
        </button>


      </div>

      <footer class="pb-1 text-x">
        <p>Developed by
          <a href="https://github.com/thaismoreiradev" target="_blank" rel="noopener noreferrer">Thais
            Moreira
          </a>
        </p>
      </footer>

    </main>

  )
}


