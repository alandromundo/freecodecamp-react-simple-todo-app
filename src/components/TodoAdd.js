import React from 'react'

function TodoAdd() {
  return (
    <section className='TodoAdd'>
      <input className='TodoAdd__input' placeholder='Example: Chop onion' type="text" />
      <button className='TodoAdd__button'>Add Todo</button>
    </section>
  )
}

export default TodoAdd