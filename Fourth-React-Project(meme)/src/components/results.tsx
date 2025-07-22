import type { DataType } from '../App'
export default function Results({data}:{data:DataType}){
    return (
        <section className="my-10 flex justify-center">
            <div className="relative w-[512px] h-[342px]">
                <img
                src="http://i.imgflip.com/1bij.jpg"
                alt="Meme"
                className="w-full h-full object-cover"
                />
   
                <h1
                className="absolute top-8 left-1/2 -translate-x-1/2 font-[impact,sans-serif] text-2xl uppercase text-white tracking-[1px]"
                style={{
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
                    `,
                }}>{data.topText}</h1>

                <h2
                className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 font-[impact,sans-serif] text-2xl uppercase text-white tracking-[1px]"
                style={{
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
                    `,
                }}>{data.bottomText}</h2>
            </div>
        </section>

    )
}