import reactLogo from './assets/react.svg'
import reactIcon from "./assets/reactIcon.png"
import './App.css'

export function Nav() { 
  return (
    <>
      <div>
        <div className='flex z-2 items-center shadow-md bg-[#20222B] gap-2 p-5'>
          <img src={reactLogo} alt="" className='h-12' />
          <h1 className='text-[#01D8FE] font-bold text-2xl'>ReactFacts</h1>
        </div>
      </div>
    </>
  )
}

export function Body() {
  return (
    <>
      <div className='text-xl md:text-2xl z-1 text-white mx-7 my-2 md:mx-10 md:my-4'>
        <h1 className='font-bold text-3xl md:text-5xl'>Fun facts about React</h1>
        <ul className='list-disc mt-4 ml-10'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on Github</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </>
  )
}

export function Footer() {
  return (
    <>
      <footer className='flex absolute w-full bottom-0 justify-center items-center bg-[#20222B] h-16'>
        <small className='text-[#01D8FE] font-bold text-lg'>© 2023 ReactFacts. All rights reserved.</small>
      </footer>
    </>
  )
}

export function Img() {
  return (
    <>
      <img src={reactIcon} alt="React Icon" className='absolute top-24 right-0 -z-10' />
    </>
  )
}

export default function  App() {
  return (
    <>
      <Nav />
      <Img />
      <Body />
      <Footer />
    </>
  )
}