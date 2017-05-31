import React from 'react';
import Title from '../../components/Title/index.jsx';
import TodosListComponent from '../../components/TodosList/index.jsx';

const TodosList = ({todos}) => (
	<div>
		<Title title="hola a todos los pibes" color="red" />
		{todos.map(list=> (
			<TodosListComponent  todos={list.todos} title={list.title} key={list.id}/>
		))}

	</div>
)

export default TodosList;
