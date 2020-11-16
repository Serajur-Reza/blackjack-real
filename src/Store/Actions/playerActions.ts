export const storePlayerCards = (cards:any) =>{
    return{
        type: "STORE_PLAYER_CARDS",
        payload: {cards}
    }
}

export const hitCards = (cards:any) =>{
    return{
        type: "HIT_CARDS",
        payload: {cards}
    }
}