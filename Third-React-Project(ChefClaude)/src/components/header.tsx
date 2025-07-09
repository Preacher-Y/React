import Logo from '../assets/chef-claude-icon.png'
export default function Header() {
    return (
        <header className="grid justify-center bg-white items-center p-4">
            <div className="flex items-center">
                <img src={Logo} alt="Chef Claude Logo" className="h-10 w-9 mr-2" />
                <h1 className="text-2xl font-bold font-light">Chef Claude</h1>
            </div>
        </header>
    )
}