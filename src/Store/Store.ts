import { combineReducers, compose, createStore } from "redux";
import { dealerReducers } from './Reducers/dealerReducers';
import { playerReducers } from './Reducers/playerReducers';
import { gameReducers } from './Reducers/gameReducers';
import { cardReducers } from './Reducers/cardReducers';


export const allReducers = combineReducers({
    dealerStore: dealerReducers,
    playerStore: playerReducers,
    gameStore: gameReducers,
    cardStore: cardReducers
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(allReducers, composeEnhancers())