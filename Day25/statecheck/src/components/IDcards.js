import IDcard from "./IDcard";
import Data from "../Data.json";
import IDcardClass from "./IDcardClass";

function IDCards() {
  //console.log(Data.data);

  return (
    <>
      <h1>IDCards</h1>

      <h2>Using Functional Component</h2>
      {Data.data.map((elm) => {
        return (
          <IDcard key={elm.id} name={elm.name} age={elm.age} des={elm.des} />
        );
      })}

      <h2>Using Class component</h2>
      {Data.data.map((elm) => {
        return (
          <IDcardClass
            key={elm.id}
            name={elm.name}
            age={elm.age}
            des={elm.des}
          />
        );
      })}
    </>
  );
}

export default IDCards;
