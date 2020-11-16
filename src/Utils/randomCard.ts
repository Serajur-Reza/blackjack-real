export const randomCardGenerator=(no_of_cards:number, cardDeck:any)=>{
    const cards:IcardDeck = {
        deck: [],
        remaining:[]
    }
    
    for(let i=0; i<no_of_cards; i++){
        const randomIndex = randomNumberGenerator(cardDeck.length)
        const randomCard = cardDeck.splice(randomIndex, 1)
        cards.deck.push(randomCard)
    }

    cards.remaining = cardDeck
    return cards
}

export const randomNumberGenerator = (length: number)=>{
    return Math.floor(Math.random()* length)
}