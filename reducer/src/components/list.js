import React from 'react';
import {useState, useReducer} from 'react';
import {listReducer, initialState} from '../reducers/listReducer';
import Todo from './Todo';




const List = (props)=> {

 
const [newTodo, setNewTodo] = useState("");


const [state, dispatch]= useReducer(listReducer, initialState);
 


const onSubmit = (e)=> {
    e.preventDefault();
    console.log("ON SUBMIT CLICKED!!")
     
    dispatch({type:'ADD_TODO', payload: newTodo})
    setNewTodo({
        task:  newTodo.task,
        completed:false,
        id: Date()
    });
    // props.addToDo(newTodo)
}


const handleClear = (e)=> {
    e.preventDefault()
    props.clearCompleted();
    console.log("CLEAR", state.todos)
}

const ToggleTodo = (todo)=> {
    console.log("TOGGLE CLICKED!")
    return dispatch({type: 'TOGGLE', payload: todo})
}



 const handleInput = e => {
    setNewTodo(e.target.value)
}


 return (

    <div>
 <h2>Todos:</h2>


 <form type = "submit"
 onSubmit = {onSubmit}>
     
     <input
     type = 'text'
      onChange = {handleInput}
      name = 'newTodo'
      value = {newTodo}
     
     
     
     
     
     
     ></input>

     <button type = 'submit'> SUBMIT</button>
     <button onClick = {handleClear}>CLEAR COMPLETED</button>



 </form>

 {state.todos.map (i => {
     return (
         <Todo  key = {i.id} todo = {i} toggle={props.toggle}  dispatch={dispatch}
         toggleTodo ={ToggleTodo}  />
     )
 })}


    </div>
)


}

export default List