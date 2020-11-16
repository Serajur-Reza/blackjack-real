import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { blackJackStatus, playerScore, resultStatus } from '../../Store/Actions/gameActions';
import { scoreCalculator } from './../../Utils/scoreCalculator';
import { Grid, Paper } from '@material-ui/core';
import { Card } from './styled';

const PlayerCard = () => {

    const [score, setScore] = useState<number>(0)
    const playerCard = useSelector((state:any)=> state.playerStore.cards)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        const firstScore = scoreCalculator(playerCard)
        dispatch(playerScore(firstScore))
        if(firstScore === 21){
            const result = {
                winner: false,
                message: "BlackJack! Stick now"
            }
            dispatch(blackJackStatus(true))
            dispatch(resultStatus(result))
        }
        setScore(firstScore)
    },[playerCard, dispatch])

    return (
        <div>
            <h1>Your Score:{score}</h1>

            {
                playerCard.map((card:any)=>{
                    return(
                        <Grid>
                            <Paper>
                                <Card>
                                    <p>{card[0].value}</p>
                                    <p>{card[0].suite}</p>
                                </Card>
                            </Paper>
                        </Grid>
                )})
            }
        </div>
    );
};

export default PlayerCard;