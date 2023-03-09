import React from 'react'
import "./Todo.css"
export default function Todo({todo, tick}) {
  function tickWithId() {
    tick(todo.id);
  }

  if(todo.completed) return (
    <div onClick={tickWithId} className="striked"><button class="button">{todo.name}</button></div>
  )

  return (
    <div onClick={tickWithId}><button class="button">{todo.name}</button></div>
  )
}
