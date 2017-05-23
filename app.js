//import { createStore } from 'redux'
const createStore = require('redux').createStore
const actions = require('./actions')
console.log (actions.addTodoList('test'))
console.log (actions.removeTodoList(15))
