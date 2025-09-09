import { useEffect, useRef, useState } from "react";

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
}[]

function useFetch(url:string){

  const [post, setData] = useState<Post|null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(()=>{
    async function fetchPost(url:string){
      try {
        setLoading(true)
        const res = await fetch(url)
        if(!res.ok){
          throw new Error("Failed to fetch")
        }
        const data = await res.json()
        return data
      } catch (error) {
        setError(`${error}`)
      }finally{
        setLoading(false)
      }
    }
    fetchPost(url).then(data=>{setTimeout(()=>{setData(data)},1000)})
  },[url])

  return {post,loading,error}
}

function App() {
  
  const ref = useRef<HTMLInputElement>(null)
  const [url,setUrl] = useState('')
  const {post, loading, error} = useFetch(url)

  function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    setUrl(ref.current?.value || '')
  }

  function handleRefresh(e:React.FormEvent){
    e.preventDefault()
    setUrl('')
  }


  return (
    <div className=" grid items-center mt-20 gap-6 justify-center max-w-3xl mx-auto">
        <div className="">
          <h1 className="text-3xl font-bold">Post Fetcher</h1>
          <p className="text-gray-500">Enter a Url to fetch and display posts</p>
        </div> 
        <div>
          <h1 className="text-2xl ">Fetcher Posts</h1>
          <p className="text-gray-500">Enter and EndPoint to fetch post from</p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input ref={ref} type="text" placeholder="Url" className="ring-gray-300 px-4 rounded-2xl focus:ring-gray-800 outline-none ring-1"/>
          <button className="bg-[#1a1a1c] text-white rounded-2xl py-2 px-4">{loading?'Fetching ...':'Fetch'}</button>
          <button onClick={(e)=>{handleRefresh(e);handleSubmit(e)}} className="bg-white ring-2 ring-[#1a1a1c] rounded-2xl py-2 px-4">Refresh</button>
        </form>
        <div>
          <h1 className="text-2xl">Posts</h1>
          <p className="text-gray-500">Posts fetched from the url</p>
        </div>
        <div>
          {loading && <h1 className="animate-pulse font-semibold">Loading...</h1>}
          {error && !post && <h1 className="hidden text-red-500">{error}</h1>}
          <h1></h1>
        </div>
    </div>
  );
}

export default App;
