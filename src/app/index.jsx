import React from 'react';
import { render } from 'react-dom';
import SubTitle from './components/SubTitle.jsx';
import TodosList from './containers/TodosList/index.jsx';

const todos1 = [{title: 'Aprender React',
                 todos: [{
                          title:"instaler webpack", id:0}
                        ],
                 id: 0
               }];
// const todos2 = [{title: 'Aprender Redux', todos: []}];

const App = () => (
  <TodosList todos={todos1} />
);

const appRender = ()=> render( <App />, document.getElementById('app') );

appRender();
