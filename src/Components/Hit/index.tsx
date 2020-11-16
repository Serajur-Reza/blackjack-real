import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { randomCardGenerator } from './../../Utils/randomCard';
import { scoreCalculator } from './../../Utils/scoreCalculator';
import { storePlayerCards } from './../../Store/Actions/playerActions';
import { playerScore, resultStatus } from '../../Store/Actions/gameActions';
import { updateDeck } from '../../Store/Actions/cardActions';
import PlayerCard from './../Game/PlayerCard';

const Hit:React.FC<IButton> = ({disabled}) => {
    const playersCard = useSelector((state:any) => state.playerStore.cards)
    const remainingCard = useSelector((state:any)=> state.cardStore.remaining)
    const dispatch=useDispatch()

    const hitAction=()=>{
        const randomCard = randomCardGenerator(1,remainingCard)
        const newPlayersCard = playersCard.concat(randomCard.deck)
        const hitScore = scoreCalculator(newPlayersCard)

        dispatch(storePlayerCards(newPlayersCard))
        dispatch(updateDeck(randomCard.remaining))
        
        if(hitScore >21){
            const result = {
                winner: true,
                message:"You got cracked. Dealer wins."
            }
            dispatch(resultStatus(result))
        }
        dispatch(playerScore(hitScore))
    }

    
    return (
        <div>
            <Button disabled={disabled} variant="outlined" color="primary" onClick={hitAction}>Hit</Button>
            
            <PlayerCard/>
        </div>
    );
};

export default Hit;