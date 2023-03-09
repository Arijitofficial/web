import React from 'react'
import './Input.css'

export default function Input({new_todo, enter, add, clear}) {
  return (
    <div class="input-section">
      <input ref={new_todo} type="text" onKeyDown={enter}></input>
      <span class="fas fa-plus" onClick={add}></span>
      <span class="fas fa-trash" onClick={clear}></span>
    </div>
  );
}
