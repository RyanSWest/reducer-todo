import React from 'react'
import {listReducer, initialState} from '../reducers/listReducer';


import List from './list';


const Todo = (props)=> {

 
    return (
        <div>
         <h2>{props.todo.task}</h2>
         <p>{props.todo.id}</p>
         <p>{props.todo.completed.toString()}</p>
         <p>{props.todo.completed}</p>
         {/* <button onClick = {(e)=>props.toggle(props.todo.id)}>X</button> */}
         <button onClick = {(e)=>props.toggleTodo(props.todo)}>TOGGLE</button>

        </div>
    )
}


export default Todo;