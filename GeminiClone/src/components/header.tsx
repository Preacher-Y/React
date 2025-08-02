import DropdownMenu from "./dropDown";

function Header() {
  return (
    <header className="py-4 text-center text-xl font-semibold relative">
      <div>
        <h1 className="text-gray-400">Gemini</h1>
        <DropdownMenu/>
      </div>
    </header>
  );
}

export default Header;
