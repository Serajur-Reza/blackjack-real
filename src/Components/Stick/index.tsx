import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { stickEvent } from './../../Utils/stickEvent';
import { scoreCalculator } from './../../Utils/scoreCalculator';
import { stickCards } from './../../Store/Actions/dealerActions';
import { resultStatus, stickStatus } from './../../Store/Actions/gameActions';
import DealerCard from './../Game/DealerCard';
import { updateDeck } from '../../Store/Actions/cardActions';
import { winnerMessage } from './../../Utils/winnerMessage';

const Stick: React.FC<IButton> = ({disabled}) => {


    const playersCard = useSelector((state:any)=> state.playerStore.cards)
    const dealersCard = useSelector((state:any)=> state.dealerStore.cards)
    const remainingCard = useSelector((state:any)=> state.cardStore.remaining)
    const blackJack = useSelector((state:any)=> state.gameStore.blackJack)
    const dispatch= useDispatch()


    const playerScoreValue = useSelector((state:any)=> state.gameStore.playerScore)
    const dealerScoreValue = useSelector((state:any)=> state.gameStore.dealerScore)

    const blackJackAction=()=>{
        const result = {
            winner: true,
            message: winnerMessage(playerScoreValue, dealerScoreValue)
        }

        dispatch(stickStatus(true))
        dispatch(resultStatus(result))
    }
    
    const stickAction=()=>{
        const newCards = stickEvent(remainingCard, playerScoreValue, dealerScoreValue)
        const newDealersCard = dealersCard.concat(newCards.deck)
        const score = scoreCalculator(newDealersCard)

        const result = {
            winner: true,
            message: winnerMessage(playerScoreValue, score)
        }

        dispatch(stickStatus(true))
        dispatch(updateDeck(newCards.remaining))
        dispatch(resultStatus(result))
        dispatch(stickCards(newDealersCard))
    }

    const stickHandler=()=>{
        // if(blackJack && playersCard.length <3){
        //     blackJackAction()
        // }
        // else{
        //     stickAction()
        // }
        stickAction()
    }
    return (
        <div>
            <Button disabled={disabled} variant="outlined" color="primary" onClick={stickHandler}>Stick</Button>
            <DealerCard/>
        </div>
    );
};

export default Stick;