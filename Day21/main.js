import { CompanyName, Fun, FunAgain } from "./importthis.js";
import FunDefault from "./importthat.js";
import AFunDefault, {
  BFun,
  ACompanyName,
  AFunAgain,
} from "./importthisandthat.js";

// export default AFunDefault;
// export { AFun as BFun, ACompanyName, AFunAgain };

// Named Exports
Fun();
console.log(CompanyName);
FunAgain();

// Default Exports
FunDefault();

// Both
AFunDefault();
BFun();
console.log(ACompanyName);
AFunAgain();
