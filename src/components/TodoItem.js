import React from 'react'

function TodoItem(props) {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{props.onDelete(props.todo)}}>delete</button>
    </div>

  )
}

export default TodoItem
