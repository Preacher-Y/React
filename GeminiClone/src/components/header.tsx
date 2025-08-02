import DropdownMenu from "./dropDown";
import Logo from '../assets/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg'

function Header() {
  return (
    <header className="py-4 text-xl flex items-center justify-between mx-10 font-semibold relative">
      <div>
        <h1 className="pl-1 text-gray-400">Gemini</h1>
        <DropdownMenu/>
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex text-white gap-1.5 rounded-md text-sm  bg-gray-700/80 hover:bg-gray-600 px-6 py-2">
          <img src={Logo} alt="star" className="h-4.5 w-4.5"/>
          Upgrade
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-400">
          <img src={Logo} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
