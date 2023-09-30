import { useParams } from "react-router-dom";

const SearchResults = (props) => {
  // After we get the target county, we show the user a new screen with a list of houses from that county.
  // We shall call that new component the SearchResults.js component, which filters through the
  // array of house objects and get the house objects that belong to the selected county.
  console.log(props);
  // Get county name from params
  const paramsObj = useParams();
  console.log("paramsObj =", paramsObj);
  // Filter for desired county
  let filteredHousesArray = props.houses.filter(
    (elem) => elem.county == paramsObj.county
  ); //CHECK
  console.log("filteredHousesArray =", filteredHousesArray);

  return (
    <div className="row">
      <h1>SearchResults.js</h1>
    </div>
  );
};

export default SearchResults;
