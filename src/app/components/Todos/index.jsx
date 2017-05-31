import React from 'react';

const Todos  = ({todos}) => (
  <ul className="todos-box">
    {todos.map(todo=>(
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
)

export default Todos;
