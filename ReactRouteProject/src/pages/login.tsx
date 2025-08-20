import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function Login({setIsLoggedIn}:{setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>}) {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })

    const [status, setStatus] = useState(false);
    
    const navigate = useNavigate()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus(true)
        const fetchUser = async (creds: { email: string, password: string }) => {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(creds)
            })
            const data = await res.json()

            if (!res.ok) {

                throw new Error("Server error occurred")
            }

            return data
        }

        fetchUser(loginFormData)
            .then(data => {
                if (data.user && data.token) {
                    toast.success("Login successful!", { style: { color: "black", fontWeight: 600 } })
                    setIsLoggedIn(true)
                    navigate('/host',{state:{id:`${data.user.id}`}})
                }
                if (data.status === 200 && !data.user && !data.token) {
                    throw new Error(data.message || "Invalid credentials ")
                }
            })
            .catch(error => {
                toast.error(error.message, {
                    style: { color: "red", fontWeight: 600 }
                })
            })
            .finally(() =>{setLoginFormData({ email: "", password: "" });setStatus(false)})
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    const location = useLocation()
    const message = location.state?.message

    useEffect(() => {
        if (message) {
            toast.info(message, { style: { color: "black", fontWeight: 600 } })
        }
    }, [message])

    return (
        <section className="h-full px-6 grid w-full text-center mt-14 mb-16">
            <ToastContainer autoClose={2000} position="top-center"/>
            <h1 className="font-bold text-2xl">Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-6 mt-8">
                <input 
                    name='email' 
                    onChange={handleChange} 
                    value={loginFormData.email} 
                    type="email" 
                    placeholder="Email" 
                    required
                    disabled={status}
                    className="border border-gray-300 rounded-md px-3 py-2"
                />
                <input 
                    name='password' 
                    onChange={handleChange} 
                    value={loginFormData.password} 
                    type="password" 
                    placeholder="Password" 
                    required
                    disabled={status}
                    className="border border-gray-300 rounded-md px-3 py-2"
                />
                <button disabled={status} className="bg-[#FF8C38] text-white py-2 rounded-md mt-6">{status?'Signning In':'Sign In'}</button>
            </form>
            <Link to='/SignUp' className='cursor-pointer text-sm mt-4'>
                Don’t have an account? <span className="text-[#FF8C38] hover:text-[#d23a10]">Create one now</span>
            </Link>
        </section>
    )
}

export default Login