import useCalcInterest from "./useCalcInterest";

const CustomHookCheck = () => {
  let [interest, calculateInterest] = useCalcInterest();
  let clickHandler = () => {
    calculateInterest(1000, 2, 3);
  };
  return (
    <div>
      Custom Hook check.
      <input
        onClick={clickHandler}
        name=""
        id=""
        class="btn btn-primary"
        type="button"
        value="Button"
      />
      Interest rate for pnr = calculateInterest(1000, 2, 3) = {interest}
    </div>
  );
};

export default CustomHookCheck;
