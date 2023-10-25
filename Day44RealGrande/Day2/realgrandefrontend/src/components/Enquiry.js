import axios from "axios";
import { useState } from "react";

const Enquiry = () => {

    let [enquiryObj, setEnquiryObj] = useState({'ename':"",'email':'','remarks':''});

    let changeHandler = (e) => {
        setEnquiryObj({...enquiryObj,[e.target.name]:e.target.value});
    }

    let clickHandler = async (e) => {
        e.preventDefault();
        console.log(enquiryObj);
        try{ 
        let resp = await axios.post('http://localhost:3002/register',{...enquiryObj});
        let data = await resp.data;
        console.log(data);
        }
        catch(error){
            console.log(" Could not store enquiry.");
            console.log(error);
        }
    }

    return ( 
        <div>
        <h6> Contact Us About this house :</h6>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Name</label>
          <input type="text" onChange={changeHandler} name="ename" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
           </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">Email</label>
          <input type="text" onChange={changeHandler} name="email" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
         </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">Message</label>
          <input type="text" onChange={changeHandler} name="remarks" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
        </div>

        <input name="" id="" onClick = {clickHandler} class="btn btn-primary" type="button" value="Submit"/>
        </div>
     );
}
 
export default Enquiry;