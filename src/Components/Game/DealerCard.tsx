import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { scoreCalculator } from './../../Utils/scoreCalculator';
import { dealerScore } from './../../Store/Actions/gameActions';
import { useDispatch } from 'react-redux';

import { Grid, Paper } from '@material-ui/core';
import { Card } from './styled';

const DealerCard = () => {

    const [score, setScore] = useState<number>(0)
    const dealerCard = useSelector((state:any)=> state.dealerStore.cards)
    const stick = useSelector((state:any)=> state.gameStore.stick)
    const dispatch = useDispatch()

    useEffect(()=>{
        const firstScore = scoreCalculator(dealerCard)
        dispatch(dealerScore(firstScore))
        setScore(firstScore)
    },[dealerCard, dispatch])

    const scoreBoard= useCallback(()=>{
        if(dealerCard.length === 2){
            if(stick){
                return scoreCalculator(dealerCard)
            }
            else{
                return scoreCalculator([dealerCard[0]])
            }
        }
        return scoreCalculator(dealerCard)
    },[dealerCard, stick])
    

    useEffect(()=>{
        const showScore = scoreBoard()
        setScore(showScore)
    },[scoreBoard, stick])
    
    return (
        <div>
            <h1>Dealer Score:{score}</h1>
            {
                dealerCard.map((card:any, index:number)=>{
                    return(
                        <React.Fragment key={index}>
                            {dealerCard.length === 2 && (
                                <>
                                {!stick && index === 0 && (
                                <Grid>
                                    <Paper>
                                        <Card>
                                            <p>{card[0].value}</p>
                                            <p>{card[0].suite}</p>
                                        </Card>
                                    </Paper>
                                </Grid>
                                )}

                                {stick && (
                                <Grid>
                                    <Paper>
                                        <Card>
                                            <p>{card[0].value}</p>
                                            <p>{card[0].suite}</p>
                                        </Card>
                                    </Paper>
                                </Grid>
                                )}
                                </>
                            )}

                            {dealerCard.length !== 2 && (
                                <Grid>
                                    <Paper>
                                        <Card>
                                            <p>{card[0].value}</p>
                                            <p>{card[0].suite}</p>
                                        </Card>
                                    </Paper>
                                </Grid>
                            )}
                        </React.Fragment>
                )})
                }
                {dealerCard.length === 2 && !stick && (
                    <div></div>
                )}
            
        </div>
    );
};

export default DealerCard;