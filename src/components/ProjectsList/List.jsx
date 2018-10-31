import React from 'react'
import { Link } from 'react-router-dom'
import { List as SemanticList, Header } from 'semantic-ui-react'

const List = () => {
	return (
		<SemanticList className="projects-list">
			<Header>Projects list</Header>
			<SemanticList.Item as={Link} to="/football">
				Football Tournament
			</SemanticList.Item>
		</SemanticList>
	)
}

export default List
