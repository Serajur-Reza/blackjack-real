import { randomNumberGenerator } from './randomCard';
import { determiner } from './scoreCalculator';

export const stickEvent=(deck:any, playerScore:number, dealerScore:number)=>{
    const cards:IcardDeck = {
        deck: [],
        remaining:[]
    }

    let score = dealerScore
    while(score<17 && score<= playerScore){
        // const randomCard = randomCardGenerator(1, deck)
        // const cardScore = scoreCalculator(randomCard.deck)
        // score= score+ cardScore
        // console.log("after stick card score - ",score)
        // cards.deck.push(randomCard.deck[0])

        const randomIndex = randomNumberGenerator(deck.length)
        const randomCard = deck.splice(randomIndex, 1)
        const cardScore = determiner(score, randomCard[0])
        score = score + cardScore

        // console.log(randomCard[0])
        // console.log(deck)
        cards.deck.push(randomCard)
    }
    cards.remaining = deck
    return cards
}