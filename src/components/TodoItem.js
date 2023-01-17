import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <span className='TodoItem__text'>{props.text}</span>
      <MdDeleteForever className='TodoItem__delete-icon'/>
    </li>
  )
}

export default TodoItem