import reactIcon from "../assets/reactIcon.png";

export default function Img() {
  return (
    <>
      <img src={reactIcon} alt="React Icon" className='absolute top-24 right-0 animate-pulse [animation-duration:4s] -z-10' />
    </>
  )
}