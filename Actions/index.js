let id=0
module.exports = {
  addTodoList: title => ({type:'ADD_TODO_LIST', title , id:id++, added: new Date(), completed:false}),
  removeTodoList: id =>({type:'REMOVE_TODO_LIST', id}),
  addTodo: (title,todoListId) => ({type:'ADD_TODO', title, todoListId, added:new Date(), completed:false}),
  removeTodo: (todoListId, id) => ({type:'REMOVE_TODO', id, todoListId}),
  toggleTodo: (todoListId, id) =>({type:'TOGGLE_TODO', id, todoListId, completed:true})
}
