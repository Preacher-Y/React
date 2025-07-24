import Header from "./components/header";
import Body from "./components/body";


export default function App() {

  return (
    <div className="border-40 w-full h-[100dvh] ">
      <Header/>
      <section className="max-w-lg mx-auto h-96 flex flex-col gap-3 justify-center">
        <Body/>
        <button className="bg-blue-600 text-white w-40 self-center mt-6 py-2 px-2">Roll the Dice</button>
      </section>
    </div>
  )
}
