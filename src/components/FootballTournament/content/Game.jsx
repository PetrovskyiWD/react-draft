import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'
import TextInput from '../../../common/form/TextInput'

const PlayersList = props => (
	<div className="players-list">
		<Form onSubmit={props.handleSubmit(props.handleAddPlayer)}>
			<div className="field-item">
				<Field name="player_name" component={TextInput} type="text" placeholder="Enter player name" />
			</div>
			<button>add</button>
		</Form>
	</div>
)

const Game = props => {
	return (
		<div className="game-wrap">
			<PlayersList {...props} />
		</div>
	)
}

export default reduxForm({
	form: 'footballForm',
})(Game)
