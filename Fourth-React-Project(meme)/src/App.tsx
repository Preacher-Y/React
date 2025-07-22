import Header from "./components/header"
import Body from "./components/body"
import Results from "./components/results"
import React from "react"

export type DataType = {
  topText: string;
  bottomText: string;
};

export default function App() {
  const [data,setData] = React.useState<DataType>({
    topText:'',
    bottomText:''
  })
  const [allMemes, setAllMemes] = React.useState<any[]>([])
  const [img, setImg]=React.useState('http://i.imgflip.com/1bij.jpg')
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getImage(): void {
        if (!allMemes || allMemes.length === 0) {
            console.warn("Meme list not loaded yet");
            return;
        }

        const random = Math.floor(Math.random() * allMemes.length);
        const obj = allMemes[random];

        if (obj && obj.url) {
            setImg(obj.url);
            
        } else {
            console.warn("Random meme object is invalid", obj);
        }
    }
  
  return (
    <>
      <Header/>
      <Body setData={setData} getImg={getImage}/>
      <Results data={data} image={img}/>
      
    </>
  )
}
