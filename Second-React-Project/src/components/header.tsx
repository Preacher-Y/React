import { Globe2 } from 'lucide-react'
export default function Header() {
  return (
    <header className="bg-[#F55A5A] w-full flex justify-center text-center text-white p-4">
        <Globe2 className="inline-block mr-2" size={24} />
        <h1 className="font-bold">My Travel Journal</h1>
    </header>
  );
}