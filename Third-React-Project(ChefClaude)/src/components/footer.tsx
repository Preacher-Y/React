
export default function Footer(){
    return (
        <footer className="grid justify-center md:fixed lg:relative dark:bg-gray-900 transition-all duration-500 bg-white z-10 w-full bottom-0 rounded-t-2xl items-center p-4">
            <div className="flex items-center">
                <p className="text-xs dark:text-white font-medium ">© 2023 Chef Claude 
                    <span className="hover:text-blue-900 dark:hover:text-blue-300 hover:underline underline-offset-3 ml-2 ">
                        <a href="https://github.com/Preacher-Y/React/tree/main/Third-React-Project(ChefClaude)">
                        Preacher
                        </a>
                    </span>
                </p>
            </div>
        </footer>
    )
}