import { BiSearch } from 'react-icons/bi'



export const Input = ({ input, setInput, handleSearch }) => (

    <div className="bg-white flex rounded-sm p-2 w-full">

        <form className='flex justify-between w-full'>

            <input
                className='outline-none w-full'
                type="text"
                placeholder='Enter a zip code here'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                className='flex items-center pr-1 outline-none'
                onClick={e => handleSearch(e)}
            >
                <BiSearch className='text-xl xs3:text-3xl text-zinc-800' />
            </button>
        </form>
    </div>
)