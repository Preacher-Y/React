import { LiaGlobeSolid } from "react-icons/lia";
export default function Header() {
  return (
    <header className="bg-[#F55A5A] w-full flex justify-center items-center text-center text-white p-4">
        <LiaGlobeSolid className="inline-block mr-2" size={39} />
        <h1 className="font-bold">My Travel Journal</h1>
    </header>
  );
}