import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from '../components/FootballTournament/content/Menu'
import Game from '../components/FootballTournament/content/Game'

const FootballTournamentRouter = ({ history, handleAddPlayer }) => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/football" component={Menu} />
				<Route exact path="/football/play" render={props => <Game handleAddPlayer={handleAddPlayer} />} />
			</Switch>
		</React.Fragment>
	)
}

export default FootballTournamentRouter
