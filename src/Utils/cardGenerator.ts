const suite = ['♦', '♣', '♥', '♠']
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']


export const cardGenerator= () =>{
    const cards = []
    for(let i=0; i<suite.length; i++){
        for(let j=0; j<value.length; j++){
            cards.push({suite: suite[i], value: value[j]})
        }
    }

    return cards;
}