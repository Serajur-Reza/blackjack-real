const initialState = {
    cards: []
}

export const dealerReducers = (state=initialState, action:any) =>{
    switch(action.type){
        case "STORE_DEALER_CARDS":
            return Object.assign(state, action.payload)
        
        case "STICK_CARDS":
            return Object.assign(state, action.payload)
        
        default:
            return state;
    }
}