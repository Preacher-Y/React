import Logo from '../assets/chef-claude-icon.png'
import Theme from './theme'
export default function Header() {
    return (
        <header className="grid justify-center dark:bg-gray-900 transition-all duration-500 bg-white fixed z-10 w-full top-0 rounded-b-2xl items-center p-4">
            <div className="flex items-center">
                <img src={Logo} alt="Chef Claude Logo" className="h-10 w-9 mr-2" />
                <h1 className="text-2xl dark:text-white font-light">Chef Claude</h1>
                <Theme />
            </div>
        </header>
    )
}