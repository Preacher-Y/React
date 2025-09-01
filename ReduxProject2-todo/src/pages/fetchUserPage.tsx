import { useDispatch } from "react-redux"
import { fetchUser, } from "../features/fetchUserSlice"
import { AppSelector, type AppDispatch } from "../main"
import { useRef } from "react"


function FetchUserPage() {
    const dispatch = useDispatch<AppDispatch>()
    const { data, status, error } = AppSelector(state => state.userPost.user)
    const ref = useRef<HTMLInputElement|null>(null)
    
  return (
    <div className="min-h-screen bg-zinc-50 pt-10 dark:bg-zinc-950 flex flex-col gap-10 justify-center place-items-center  text-zinc-900 dark:text-zinc-50">
      <input ref={ref} type="text" placeholder="Enter User ID" className="ring-2 ring-zinc-800 placeholder:text-white px-4 py-2 rounded-2xl" />
      <button onClick={() => dispatch(fetchUser(Number(ref.current?.value)))} className="bg-zinc-800 hover:bg-transparent w-50 hover:border-2 hover:border-zinc-800 hover:shadow-[0px_0px_30px_gray] py-6 px-12 rounded-4xl">Load User</button>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <pre>{`Name: ${data?.name} \nEmail: ${data?.email}`}</pre>}
    </div>
  )
}

export default FetchUserPage