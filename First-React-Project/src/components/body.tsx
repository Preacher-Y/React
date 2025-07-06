import Img from "./img"
export default function Body() {
  return (
    <>
    <div>
      <div className='text-xl md:text-2xl z-1 text-white mx-7 my-2 md:mx-10 md:my-4'>
        <h1 className='font-bold text-3xl md:text-5xl'>Fun facts about React</h1>
        <ul className='list-disc marker:text-[#01D8FE] mt-4 ml-10'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on Github</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <Img />
    </div>
    </>
  )
}