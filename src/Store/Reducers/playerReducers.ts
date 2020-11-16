const initialState = {
    cards: []
}

export const playerReducers = (state=initialState, action:any) =>{
    switch(action.type){
        case "STORE_PLAYER_CARDS":
            return Object.assign(state, action.payload)
        
        case "HIT_CARDS":
            return Object.assign(state, action.payload)
        
        default:
            return state;
    }
}