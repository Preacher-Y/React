import type { DataType } from '../App'
export default function Results({data}:{data:DataType}){
    return (
        <section className=''>
            <h1 className=' text-center my-[15px] px-[5px] font-[impact,sans-serif] text-[2rem] uppercase text-white tracking-[1px]' 
            style={
                {
                    textShadow: `
                    2px 2px 0 #000,
                    -2px -2px 0 #000,
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    0 2px 0 #000,
                    2px 0 0 #000,
                    0 -2px 0 #000,
                    -2px 0 0 #000,
                    2px 2px 5px #000
                    `
                }
            }>{data.topText}</h1>
            <h2 className=' text-center my-[15px] px-[5px] font-[impact,sans-serif] text-[2rem] uppercase text-white tracking-[1px]'
            style={
                {
                    textShadow: `
                    2px 2px 0 #000,
                    -2px -2px 0 #000,
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    0 2px 0 #000,
                    2px 0 0 #000,
                    0 -2px 0 #000,
                    -2px 0 0 #000,
                    2px 2px 5px #000
                    `
                }
            }>{data.bottomText}</h2>
        </section>
    )
}