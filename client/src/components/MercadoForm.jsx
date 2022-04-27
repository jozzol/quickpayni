import React, {useState} from 'react'
// import { useDispatch, useSelector } from "react-redux";


const MercadoForm = () => {
    const [total, setTotal] = useState("");
  
    const handleChange = (e) => {
      setTotal(e.target.value);
      console.log(total);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
  
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Total:
              <input type="text" value={total} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );

    // return(
    //   <div>
    //         <h2>Hey react!</h2>
    //     </div>
    // )
  }

  export default MercadoForm;
