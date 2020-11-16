export const storeCards = (deck:any, remaining:any)=>{
    return{
        type: "STORE_CARDS",
        payload: {deck, remaining}
    }
}

export const updateDeck = (remaining:any)=>{
    return{
        type: "UPDATE_DECK",
        payload: {remaining}
    }
}