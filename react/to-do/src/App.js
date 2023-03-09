import React, {useState, useRef, useEffect} from 'react'
import Input from './Input'
import Section from './Section'
import {v4 as uuidv4} from 'uuid';
const TODO_KEY = "TODOS"

function App() {
  // Hooks
  const [todos, setTodos] = useState([])
  const NEW_TODO = useRef()

  // Inital loading -> retrieves todos from local storage
  useEffect(() => {
    const new_todos = JSON.parse(localStorage.getItem(TODO_KEY));
    setTodos(prev_todos => [...prev_todos, ...new_todos]);
    console.log("retreived:", new_todos)
  }, [])

  // saves the todos everytime it gets modified
  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    console.log("stored")
  }, [todos])

  // function to add the todo from input field
  function handleAddTodo() {
    const new_todo_name = NEW_TODO.current.value;
    console.log(new_todo_name);
    var new_todo = {id:uuidv4(), name:new_todo_name, completed:false};
    setTodos((prev_todos) => [...prev_todos, new_todo]);
    console.log(todos);
    NEW_TODO.current.value = null;
  }

  // adds todo if enter is pressed in the input field
  const handleEnter = (event) => {
    if(event.key === 'Enter') {
      handleAddTodo();
    }
  }

  // deletes todo and saves the rest of the todo
  function clearTodo() {
    console.log("clearing");
    setTodos([]);
    console.log("cleared", todos);
  }

  // strikes the text if a todo is complete
  function toggleStrike(id) {
    console.log("gettin toggled but logic error")
    var new_todos = todos.map(todo => {
      if(todo.id===id) {
        todo.completed = !todo.completed;
      } 
      return todo;
    })
    setTodos((p) => new_todos);
  }

  return (
    <div className="App">
      <Input new_todo={NEW_TODO} enter={handleEnter} add={handleAddTodo} clear={clearTodo}/>
      
      <ul><Section todos={todos.filter(todo => !todo.completed)} toggleStrike={toggleStrike}/></ul>
      
      <ul><Section todos={todos.filter(todo => todo.completed)} toggleStrike={toggleStrike}/></ul>
    </div>
  );
}

export default App;
