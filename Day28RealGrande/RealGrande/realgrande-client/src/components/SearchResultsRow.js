import { useNavigate } from "react-router-dom";

const SearchResultsRow = (props) => {
  const navigate = useNavigate();

  let clickHandler = () => {
    console.log(
      "SearchResultsRow.js: You clicked props.house._id =",
      props.house._id
    );
    navigate("/searchedHouse/" + props.house._id);
  };

  return (
    <tr key={props.house._id} onClick={clickHandler}>
      <td scope="row">{props.house.address}</td>
      <td>{props.house.price}</td>
      {/* <td>{props.house.description}</td> */}
    </tr>
  );
};

export default SearchResultsRow;
