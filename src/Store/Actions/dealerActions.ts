export const storeDealerCards = (cards:any) =>{
    return{
        type: "STORE_DEALER_CARDS",
        payload: {cards}
    }
}

export const stickCards = (cards:any) =>{
    return{
        type: "STICK_CARDS",
        payload: {cards}
    }
}