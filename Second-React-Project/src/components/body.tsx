import Data from "../data";
import Card from "./props";

export default function Body() {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-9">
      {Data.map(el => (
        <Card
          img={el.img}
          country={el.country}
          googleMapsLink={el.googleMapsLink}
          title={el.title}
          dates={el.dates}
          text={el.text}
        />
      ))}
    </div>
  );
}
