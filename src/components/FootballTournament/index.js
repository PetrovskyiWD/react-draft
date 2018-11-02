import React, { Component } from 'react'
import { connect } from 'react-redux'
import FootballTournamentRouter from '../../routes/FootballTournamentRouter'
import { addPlayer } from '../../actions/footballTournamentActions'
import './style/index.scss'

class FootballTournament extends Component {
	handleAddPlayer = values => {
		let newPlayer = {}
		newPlayer.id = this.props.players.length + 1
		newPlayer.name = values.player_name
		this.props.addPlayer(newPlayer)
	}

	render() {
		const { history, players } = this.props
		return <FootballTournamentRouter players={players} history={history} handleAddPlayer={this.handleAddPlayer} />
	}
}

FootballTournament = connect(
	({ players }) => {
		return { players }
	},
	{ addPlayer }
)(FootballTournament)

export default FootballTournament
