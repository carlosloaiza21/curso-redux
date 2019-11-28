import { combineReducers } from 'redux';
import pokemonReducer from './pokemones';

const rootReducer = combineReducers({
  pokemonReducer
});

export default rootReducer;
