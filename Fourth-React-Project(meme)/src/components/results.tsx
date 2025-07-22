import type { DataType } from '../App'
export default function Results({data}:{data:DataType}){
    return (
        <section className={`my-10 bg-[url('http://i.imgflip.com/1bij.jpg')] bg-contain bg-no-repeat bg-center`}>
            <h1 className=' text-center my-[15px] px-[5px] font-[impact,sans-serif] text-3xl uppercase text-white tracking-[1px]' 
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
            <h2 className=' text-center my-22 px-[5px] font-[impact,sans-serif] text-3xl uppercase text-white tracking-[1px]'
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