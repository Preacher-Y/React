import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify'

export default function Login() {

  const navigate = useNavigate()
  const location = useLocation()
  const message = location.state?.message

  useEffect(() => {
    if (message) {
      toast.info(message, { style: { color: "black", fontWeight: 600 } })
    }
  }, [message])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <ToastContainer position="top-center"/>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={()=>{localStorage.setItem('LoggedInRedux','true'); navigate('profile',{replace:true})}}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

