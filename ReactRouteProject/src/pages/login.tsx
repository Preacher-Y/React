import clsx from "clsx"
import { useEffect } from "react"
import { Form, Link, useLocation, useNavigate, useActionData, useNavigation } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import type { UserType } from "../type"

function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const actionData = useActionData() as { success: boolean; data?: UserType; error?: string } | undefined
  const navigation = useNavigation()
  const message = location.state?.message

  useEffect(() => {
    if (actionData?.success) {
        toast.success('Succefully Logged In', {
        style: { color: "red", fontWeight: 600 } 
      })
      console.log('redirecting to host')
      navigate('/host', { replace: true })
    } else if (actionData?.error) {
      toast.error(actionData.error, { 
        style: { color: "red", fontWeight: 600 } 
      })
    }
  }, [actionData, navigate])

  useEffect(() => {
    if (message) {
      toast.info(message, { style: { color: "black", fontWeight: 600 } })
    }
  }, [message])

  const isSubmitting = navigation.state === "submitting"

  return (
    <section className="h-full px-6 grid w-full text-center mt-14 mb-16">
      <ToastContainer autoClose={2000} position="top-center"/>
      
      <h1 className="font-bold text-2xl">Sign in to your account</h1>
      
      <Form method="post" className="flex flex-col gap-2 mx-6 mt-8">
        <input
          name='email'
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-3 py-2"
          disabled={isSubmitting}
        />
        <input
          name='password'
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md px-3 py-2"
          disabled={isSubmitting}
        />
        <button 
          className={clsx("py-2 rounded-md mt-6 disabled:opacity-50",{
            "bg-gray-500 text-gray-700":isSubmitting,
            "bg-[#FF8C38] text-white":!isSubmitting
          })}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
      </Form>
      
      <Link to='/SignUp' className='cursor-pointer text-sm mt-4'>
        Don't have an account? <span className="text-[#FF8C38] hover:text-[#d23a10]">Create one now</span>
      </Link>
    </section>
  )
}

export default Login