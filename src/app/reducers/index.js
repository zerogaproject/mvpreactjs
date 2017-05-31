const todoList = (state={},action) =>{
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return {
        title:action.title,
        todos:[],
        completed:false,
        added:new Date(),
        id:action.id
      }
    case 'REMOVE_TODO_LIST':
        state.filter(l=> l.id != action.id)
        return
    case 'ADD_TODO':
        return Object.assign({},state,
            state.id === action.todoListId ? {
              todos:[...state.todos,{
              id:action.id,
              title: action.title,
              completed:false,
              added:new Date() }]
            } : {todos: [...state.todos]})
    default:
      return state;
  }
}

const todo = (state={},action) =>{
  switch (action.type) {
    case 'ADD_TODO':
        return Object.assign({},state,
            state.id === action.todoListId ? {
              todos:[...state.todos,{
              id:action.id,
              title: action.title,
              completed:false,
              added:new Date() }]
            } : {todos: [...state.todos]})

    case 'REMOVE_TODO':
       return Object.assign({},state,
             state.id === action.todoListId ? {
             todos: state.todos.filter(filter => filter.id !== action.id)
          } : {todos: [...state.todos]}
      ));

      case 'TOGGLE_TODO':
          return Object.assign({},state,{todos:state.todos.map(t=>{
            Object.assign({},t,{
               state.id === action.todoListId && t.id === action.todoListId
            }
          })}
    default:
      return state;
  }
}

const todos = (state =[], action) =>{
  switch (action.type) {
    case 'ADD_TODO_LIST':
        return [...state,todoList({},action)]
    case 'REMOVE_TODO_LIST':
        return state.filter(l=> l.id != action.id)
    case 'ADD_TODO':
        return state.map(l => todo(l,action));

    case 'REMOVE_TODO':
        return state.map(l => todo(l,action));
    case 'TOGGLE_TODO':
        return
    // case 'TOGGLE_TODO':
    //     return state.map (l => Object.assign({},l,
    //         l.id === action.todoListId ? {
    //            todos.map(k => Object.assign({},k,
    //                k.id === action.todoListId ? {
    //                  completed = true;
    //                }: {todos:[...k.todos]}
    //            ))
    //         }:{todos:[...l.todos]}
    //     );
    //   )

    default:
      return state

  }
}

module.exports = todos
