// BOTH Named Exports & Default Export

const AFun = () => {
  console.log("Fun method in importthis..js file");
};

const ACompanyName = "ProCareer";

const AFunAgain = () => {
  console.log("FunAgain method in importthis..js file");
};

const AFunDefault = () => {
  console.log("AFunDefault");
};

export default AFunDefault;
export { AFun as BFun, ACompanyName, AFunAgain };
