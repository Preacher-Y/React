import type { DataType } from '../App'
export default function Results({data}:{data:DataType}){
    return (
       <section className="my-10 flex justify-center">
            <div className="relative w-full max-w-[512px] max-sm:mx-7 aspect-[3/2]">
                <img
                src="http://i.imgflip.com/1bij.jpg"
                alt="Meme"
                className="w-full h-full object-cover"
                />
                
                <h1
                className="absolute top-4 left-1/2 -translate-x-1/2 px-1 font-[impact,sans-serif] text-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-white tracking-[1px]"
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
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-1 font-[impact,sans-serif] text-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-white tracking-[1px]"
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