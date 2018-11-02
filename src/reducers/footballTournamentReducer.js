import { createReducer } from '../common/utils/reducerUtil'
import { ADD_PLAYER } from '../actions/footballTournamentActions'

const initialState = []

export const addPlayer = (state, payload) => {
	return [...state, Object.assign({}, payload.player)]
}

export default createReducer(initialState, {
	[ADD_PLAYER]: addPlayer,
})
