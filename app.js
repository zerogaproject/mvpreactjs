//import { createStore } from 'redux'
const createStore = require('redux').createStore
const actions = require('./actions')
const reducers = require('./reducers')
const store = createStore(reducers)

store.subscribe(()=>console.log(store.getState()))
store.dispatch (actions.addTodoList('list 1'))
store.dispatch (actions.addTodoList('list 2'))
store.dispatch (actions.removeTodoList(0))
store.dispatch (actions.addTodo('my first task',1))
store.dispatch (actions.removeTodo(1,2))
store.dispatch (actions.addTodo('my second task',1))
store.dispatch (actions.toggleTodo(3,1))
// console.log (actions.addTodoList('test'))
// console.log (actions.removeTodoList(15))
// console.log (actions.addTodo('AddMyfirstTodo',15))
// console.log (actions.removeTodo('removeMyfirstTodo',15))
// console.log (actions.toggleTodo(1,15))
