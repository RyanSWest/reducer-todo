import React from 'react';
import logo from './logo.svg';
import List from './components/list';
import {initialState, listReducer} from './reducers/listReducer';
import {useReducer} from 'react';
import './App.css';

function App() {
const [state, dispatch] = useReducer(listReducer, initialState)
 
const toggle = id => {

  console.log("ID", id)
  dispatch ({type: 'TOGGLE', payload: id})
}


const addTodo = item => {
  dispatch ({type: 'ADD_TODO', payload: item})
}

const clearCompleted= (v)=> {
  console.log("CLEAR STATE", state.todos)
  dispatch({type: "CLEAR"})
}
  return (
    <div className="App">
      <header className="App-header">
          <h1>Reducer To Do List</h1>

         <List todos= {state.todos} toggle={toggle}
             addTodo = {addTodo} clearCompleted = {clearCompleted}/>
      </header>
    </div>
  );
}

export default App;
