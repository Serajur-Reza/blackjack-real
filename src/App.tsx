import React, { useEffect, useCallback } from 'react';
import { HeadLine } from './App.styles';
import { Button, Grid } from '@material-ui/core';
import { cardGenerator } from './Utils/cardGenerator';
import { randomCardGenerator } from './Utils/randomCard';
import Hit from './Components/Hit/index';
import Stick from './Components/Stick/index';

import { useSelector, useDispatch } from "react-redux"
import { storePlayerCards } from './Store/Actions/playerActions';
import { storeDealerCards } from './Store/Actions/dealerActions';
import { storeCards } from './Store/Actions/cardActions';
import { resetGame, resultStatus } from './Store/Actions/gameActions';


function App() {
	const dispatch = useDispatch()
	const ResetAction=()=>{
		loadGame()
		dispatch(resetGame())
	}
	
	const blackJack = useSelector((state:any)=> state.gameStore.blackJack)
    const result = useSelector((state:any)=> state.gameStore.result)

	const loadGame= useCallback(()=>{

		const result = {
			winner:false,
			message: ""
		}
		const cards=cardGenerator()
		const allCards = cards.map(a=>a)
		const playerCards = randomCardGenerator(2,cards)
		const dealerCards = randomCardGenerator(2,playerCards.remaining)
		
		dispatch(resultStatus(result))
		dispatch(storeCards(allCards, dealerCards.remaining))
		dispatch(storePlayerCards(playerCards.deck))
		dispatch(storeDealerCards(dealerCards.deck))
		dispatch(resetGame())
	},[dispatch])

	useEffect(()=>{
		loadGame()
	},[loadGame])
	
	return (
		<div>

			<Grid container>
				<Grid container item justify="center">
					
					<Grid item xs={4} sm={12} md={8} lg={3}>
						<HeadLine>Blackjack</HeadLine>
						<Button variant="outlined" color="primary" onClick={ResetAction}>New Game</Button>
						<p>{result.message}</p>
					</Grid>
				</Grid>
			</Grid>

			<Grid container>
				<Grid container item justify="center">
					
					<Grid item xs={4}>
						<Hit disabled={blackJack ? true: result.winner}/>
					</Grid>

					<Grid item xs={4}>
						<Stick disabled={result.winner ?? false}/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
