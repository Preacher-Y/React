
import { Link } from "react-router-dom"

function Login(){
    return(
        <section className="h-full px-6 grid w-full text-center mt-14 mb-16">
            <h1 className="font-bold text-2xl">Sign in to your account</h1>

            <form className="flex flex-col gap-2 mx-6 mt-8">
                <input type="email" placeholder="Email" required className="border border-gray-300 rounded-md px-3 py-2"/>
                <input type="password" placeholder="Password"  required className="border border-gray-300 rounded-md px-3 py-2"/>
                <button className="bg-[#FF8C38] text-white py-2 rounded-md mt-6">Sign In</button>
            </form>
            <Link to='/SignUp' className='cursor-pointer text-sm mt-4'>Don’t have an account? <span className="text-[#FF8C38] hover:text-[#d23a10]">Create one now</span></Link>
        </section>
    )
}

export default Login