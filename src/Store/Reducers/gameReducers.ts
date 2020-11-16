import { initialState } from './../initialState';

export const gameReducers=(state=initialState, action:any)=>{
    switch(action.type){
        case "RESET_GAME":
            return {...state, ...action.payload}

        case "PLAYER_SCORE":
            return Object.assign(state, action.payload)

        case "DEALER_SCORE":
            return Object.assign(state, action.payload)
        
        case "GAME_RESULT":
            return Object.assign(state, action.payload)

        case "BLACKJACK":
            return Object.assign(state, action.payload)

        case "STICK":
            return Object.assign(state, action.payload)

        default:
            return state;
    }
}