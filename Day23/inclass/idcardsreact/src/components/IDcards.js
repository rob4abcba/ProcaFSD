import IDcard from "./IDcard";
import Data from "../Data.json";

function IDCards() {
  //console.log(Data.data);

  return (
    <>
      <h1>ID Cards</h1>
      {Data.data.map((elm) => {
        return (
          <IDcard key={elm.id} name={elm.name} age={elm.age} des={elm.des} />
        );
      })}
    </>
  );
}

export default IDCards;
