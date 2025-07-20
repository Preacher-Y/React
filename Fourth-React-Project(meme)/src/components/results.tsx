import type { DataType } from '../App'
export default function Results({data}:{data:DataType}){
    return (
        <section className='text-center'>
            <h1>{data.topText}</h1>
            <h2>{data.bottomText}</h2>
        </section>
    )
}