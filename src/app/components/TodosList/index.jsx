import React from 'react';
import SubTitle from '../SubTitle.jsx';
import Todos from '../Todos/index.jsx';

const TodosList = ({title, todos}) => (
  <div>
  <SubTitle subtitle={title}  />
  <Todos todos={todos} />
  </div>

)

export default TodosList;
