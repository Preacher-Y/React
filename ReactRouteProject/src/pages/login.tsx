function Login(){
    return(
        <section className="h-full px-6 grid w-full text-center mt-14 mb-16">
            <h1 className="font-bold text-2xl">Sign in to your account</h1>

            <form className="flex flex-col gap-2 mx-6">
                <input type="email" placeholder="Email" required className="border border-gray-300 rounded-md px-2 py-1"/>
                <input type="password" placeholder="Password"  required className="border border-gray-300 rounded-md px-2 py-1"/>
            </form>
        </section>
    )
}

export default Login