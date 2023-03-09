import React from 'react'
import Todo from './Todo'
export default function Section({todos, toggleStrike}) {
  return (
    todos.map(todo => {
      return <li key={todo.id} ><Todo todo={todo} tick={toggleStrike} /></li>
    })
  );
}
