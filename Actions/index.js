let id=0
let todoId = 0
module.exports = {
  addTodoList: title => ({type:'ADD_TODO_LIST', title , id:id++, added: new Date(), completed:false}),
  removeTodoList: id =>({type:'REMOVE_TODO_LIST', id}),
  addTodo: (name,todoListId) => ({type:'ADD_TODO', name, todoId:todoId++, todoListId, added:new Date(), completed:false})
//  completeTodoList: title =>({type:'COMPLETE_TODO_LIST', title})
}
