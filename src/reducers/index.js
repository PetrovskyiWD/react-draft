import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import footballTournamentReducer from '../reducers/footballTournamentReducer'

const rootReducer = combineReducers({
	form: formReducer,
	players: footballTournamentReducer,
})

export default rootReducer
