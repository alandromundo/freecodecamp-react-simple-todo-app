import React from 'react'
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

function TodoItem(props) {

  const [isCompleted, setIsCompleted] = useState(props.initialIsCompleted);

  const checkedClass = isCompleted ? 'Checked': '';

  function handleClick() {
    setIsCompleted(!isCompleted);
  }

  return (
    <li onClick={handleClick} className={`TodoItem ${checkedClass}`}>
      <span className='TodoItem__text'>{props.text}</span>
      <MdDeleteForever className='TodoItem__delete-icon'/>
    </li>
  )
}

export default TodoItem