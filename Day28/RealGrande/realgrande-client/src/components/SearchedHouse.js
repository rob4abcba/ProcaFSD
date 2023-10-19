import { useParams } from "react-router-dom";
import House from "./House";

const SearchedHouse = (props) => {
  let paramObj = useParams();
  console.log("SearchedHouse.js: paramObj =", paramObj); //has he house id
  console.log("SearchedHouse.js: props =", props);

  //this returns single object
  let searchedHouseObj = props.houses.find((house) => house._id == paramObj.id);
  console.log(searchedHouseObj);

  if (!props) {
    console.log(props);
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1> Searched House </h1>
      <House houseinfo={searchedHouseObj} />
    </div>
  );
};

export default SearchedHouse;
