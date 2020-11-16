import { ace_upper, blackjack_value, ace_lower, kqj_value } from "../Constants";

export const scoreCalculator =(deck:any)=>{

    let total=0;
    deck.forEach((card:any) => {
        const point= determiner(total, card[0])
        total= total + point
    });
    return total;
}

export const determiner=(total:number, card:any)=>{
        // if(card.value==="A"){
        //     if((total + 11) >21){
        //         return 1
        //     }
        //     else{
        //         return 11
        //     }
        // }

        // else if(card.value === "K" || card.value === "Q" || card.value === "J"){
        //     return 10
        // }
    
        // else{
        //     return card.value;
        // }

        if(typeof card.value === 'string'){
            if(card.value==="A"){
                if(total + ace_upper > blackjack_value){
                    return ace_lower
                }
                else{
                    return ace_upper
                }
            }
            else{
                return kqj_value
            }
        }
        
        else{
            return card.value;
        }
}