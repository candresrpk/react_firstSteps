import React from 'react'

const TodoCounter = ({done, total}) => {
  return (
    <h2 className='TodoCounter'>You had made <span>{done} </span> of <span>{total}</span> tasks</h2>
  )
}

export default TodoCounter