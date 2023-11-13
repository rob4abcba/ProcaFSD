import { useState } from "react";

const useCalcInterest = () => {
  let [interest, setInterest] = useState(0);
  let calculateInterest = (p, n, r) => {
    let interest = (p * n * r) / 100;
    setInterest(interest);
  };

  return [interest, calculateInterest];
};

export default useCalcInterest;
