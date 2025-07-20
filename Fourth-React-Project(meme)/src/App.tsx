import Header from "./components/header"
import Body from "./components/body"
import Results from "./components/results"
import { useState } from "react"

export type DataType = {
  topText: string;
  bottomText: string;
};

export default function App() {
  const [data,setData] = useState<DataType>({
    topText:'',
    bottomText:''
  })
  return (
    <>
      <Header/>
      <Body setData={setData}/>
      <Results data={data}/>
    </>
  )
}
