import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Menu = ({ history }) => {
	return (
		<div className="football-menu">
			<ul>
				<li>
					<Button className="btn" as={Link} to="/football/play">
						Start
					</Button>
				</li>
				<li>
					<Button className="btn" onClick={history.goBack}>
						Back
					</Button>
				</li>
			</ul>
		</div>
	)
}

export default Menu
