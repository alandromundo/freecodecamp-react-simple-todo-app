import React from 'react'

function TodoList(props) {
  return (
    <section className='TodoList'>
      <ul className='TodoList__list'>
        {props.children}
      </ul>
    </section>
  )
}

export default TodoList