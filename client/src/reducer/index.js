const initialState = {
    paymentInfo : []
}


function rootReducer(state = initialState, action){
    const paymentInfo = state.paymentInfo
    switch(action.type){

        case "MAKE_PAYMENT":
            return{
                ...state,
                paymentInfo: action.payload
            } 
        
        default:
            return state;
    }
}

export default rootReducer