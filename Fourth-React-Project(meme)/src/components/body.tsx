export default function Body(){
    return (
        <section className="mx-auto max-w-lg max-sm:rounded-b-lg">
            <form action="" className="grid">
                <div className="md:flex grid justify-center md:justify-between items-center py-4">
                    <div className="grid max-sm:mb-4 ">
                        <label htmlFor="top" className="font-bold text-lg tracking-wide">Top Text</label>
                        <input 
                            type="text" 
                            placeholder="Top Text" name="top" 
                            className="py-1 px-3 rounded w-[250px] md:w-[222px] h-10 md:h-9 border border-gray-400 outline-none focus:border-blue-500" 
                        />
                    </div>
                    <div className="grid max-sm:mb-4">
                        <label htmlFor="bottom" className="font-bold text-lg tracking-wide">Bottom Text</label>
                        <input 
                            type="text" 
                            placeholder="Bottom Text" name="bottom"
                            className="py-1 px-3 rounded border w-[250px] md:w-[222px] h-10 md:h-9 border-gray-400 outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
                <button className="max-sm:mx-auto max-sm:text-2xl py-2 px-4 font-semibold hover:scale-102 duration-500  md:py-1 md:px-2 bg-gradient-to-r from-[#672280] to-[#A626D3] text-white rounded">Get a new meme image 🖼️</button>
            </form>
        </section>
    )
}