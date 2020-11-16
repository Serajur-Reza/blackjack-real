export const scoreCalculator =(deck:any)=>{

    let total=0;
    deck.forEach((card:any) => {
        const point= determiner(total, card[0])
        if(card[0].value=== "A"){
            console.log("value for ace is ",point)
        }

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
                if((total + 11) >21){
                    return 1
                }
                else{
                    return 11
                }
            }
            else{
                return 10
            }
        }
        
        else{
            return card.value;
        }
}