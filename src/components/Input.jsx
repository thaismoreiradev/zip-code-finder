import { BiSearch } from 'react-icons/bi'




export const Input = ({input, setInput, handleSearch}) => (

    <div className="bg-white flex rounded-sm p-2 w-full justify-between">
        <input
            className='outline-none'
            type="text"
            placeholder='Enter a zip code here'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <button
            className='flex items-center pr-1 outline-none'
            onClick={handleSearch}
        >
            
            <BiSearch className='text-xl xs3:text-3xl'/>
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}

        </button>
    </div>
)