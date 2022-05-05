import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makePayment } from '../actions';
import { useEffect } from 'react';


const MercadoForm = () => {
  // const baseURL = "https://quickpayni.herokuapp.com/";


    const paymentInfo = useSelector ((state) => state.paymentInfo)
    const dispatch = useDispatch();
    const [paymentBody, setPaymentBody] = useState({
      payer_email: "test_user_77335685@testuser.com",
          title: "changed tittle",
          description: "changed description",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "new category098",
          quantity: 1,
          unit_price: "",
        back_urls: {
          failure: "/failure",
          pending: "/pending",
          success: "/success"
        }

    });
  
    const handleChange = (e) => {
      e.preventDefault()
      setPaymentBody({
        ...paymentBody,
        [e.target.name]: e.target.value
      });
    }

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(`payment body` + paymentBody);
      try{
          dispatch(makePayment(paymentBody))
          // console.log('payment in process')
          // window.open(paymentInfo.init_point)  
      }catch(error){
        console.log("error in payment")
      } 
      
    }

    useEffect(() =>{
      window.open(paymentInfo.init_point) 
    },[paymentInfo])
  
      return (
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <label>
              Total:
              <input type="text" name="unit_price" value={paymentBody.unit_price} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
  }

  export default MercadoForm;
