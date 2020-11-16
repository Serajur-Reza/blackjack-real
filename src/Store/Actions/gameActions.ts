import { initialState } from './../initialState';

export const resetGame =() =>{
    return{
        type: "RESET_GAME",
        payload: initialState
    }
}

export const playerScore =(score: number) =>{
    return{
        type: "PLAYER_SCORE",
        payload: {playerScore :score}
    }
}

export const dealerScore =(score: number) =>{
    return{
        type: "DEALER_SCORE",
        payload: {dealerScore: score}
    }
}

export const blackJackStatus = (blackJack:boolean)=>{
    return{
        type:"BLACKJACK",
        payload: {blackJack}
    }
}

export const stickStatus = (stick:boolean)=>{
    return{
        type:"STICK",
        payload: {stick}
    }
}

export const resultStatus = (result:object)=>{
    return{
        type:"GAME_RESULT",
        payload: {result}
    }
}