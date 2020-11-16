export const winnerMessage = (playerScore: number, dealerScore:number) =>{
    if( playerScore <=21 && dealerScore<=21 ){
        if(playerScore < dealerScore){
            return "Dealer Wins"
        }
        else if(playerScore > dealerScore){
            return "You Win"
        }

        else{
            return "Push"
        }
    }

    else if(playerScore > 21){
        return "You're cracked. Dealer wins"
    }

    else{
        return "Dealer is cracked. You win"
    }
}

