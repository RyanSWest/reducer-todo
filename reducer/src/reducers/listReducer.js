 export const initialState = {
 todos:[
    {
        task: 'Inflintrate Government Headquarters',
        completed:false,
        id: Date.now()
    }]
};


 
 export function listReducer (state, action){

    switch(action.type){


        case "TOGGLE":
 
                // return {
                //     ...state,
                //     todos: state.todos.map(todo => (
                //       todo.id === action.payload ? {...todo, completed: !todo.completed } : todo
                //     ))
                //   };

                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        if(todo.id === action.payload.id){

                            return {...todo,   completed: !todo.completed}
                        }else {
                            return todo;
                        }
                    })
                }


       case "ADD_TODO": 
          
            return {
                ...state, 
                todos: [...state.todos, {task: action.payload, completed: false, id: Date()}]
            }

            case "CLEAR": 

            

            return {

                ...state, 

                todos: state.todos.filter( each => !each.completed)
                // todos: filtered
                // todos: state.todos.filter(todo=> {
                //     if( !todo.completed){
                //         return todo;
                //     }else {
                //         return state;
                //     }

                // })
                // todos: state.todos.filter(({completed}) => !completed)

                // todos: state.todos.map(todo => {
                //     if(todo.completed === false){
                //         return todo;
                //     }else{
                //         return state;
                //     }
                // })

            }

 
       default:
           return state;
 
 }
}

