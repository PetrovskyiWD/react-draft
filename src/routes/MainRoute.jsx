import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProjectsList from '../components/ProjectsList'
import FootballTournament from '../components/FootballTournament'

const MainRoute = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={ProjectsList} />
			</Switch>
			<Route
				path="/(.+)"
				render={() => (
					<Switch>
						<Route path="/football" component={FootballTournament} />
					</Switch>
				)}
			/>
		</React.Fragment>
	)
}

export default MainRoute
