import reactLogo from '../assets/react.svg'

export default function Nav() { 
  return (
    <>
      <div>
        <div className='flex z-2 items-center shadow-md bg-[#20222B] gap-2 p-5'>
          <img
            src={reactLogo}
            alt=""
            className='h-12 animate-spin [animation-duration:3s]'
          />
          <h1 className='text-[#01D8FE] font-bold text-2xl'>ReactFacts</h1>
        </div>
      </div>
    </>
  )
}