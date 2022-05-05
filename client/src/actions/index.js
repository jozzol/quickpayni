import axios from 'axios';

export function makePayment(payload){
    return async function(dispatch){
        try{
        const json = await axios.post('http://localhost:3001/payment', payload);

        return dispatch({
            type: "MAKE_PAYMENT",
            payload: json.data
        });

        
        }
        catch (err){
            console.log(err)
        }
    }
}