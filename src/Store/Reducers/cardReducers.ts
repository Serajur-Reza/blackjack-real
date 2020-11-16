const initialState = {
    deck:[],
    remaining: []
}

export const cardReducers = (state=initialState, action:any) =>{
    switch(action.type){
        case "STORE_CARDS":
            return Object.assign(state, action.payload)
        
        case "UPDATE_DECK":
            return Object.assign(state, action.payload)
        
        default:
            return state
    }
}