import Logo from '../assets/Troll Face.svg'
export default function (){
    return (
        <header className='flex items-center px-6 py-3 bg-gradient-to-r from-[#672280] to-[#A626D3] gap-1'>
            <img src={Logo} alt="meme Logo" />
            <h1 className='text-white font-semibold'>Meme Generator</h1>
        </header>
    )
}