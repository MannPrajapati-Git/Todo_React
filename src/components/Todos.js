import React from 'react'
import TodoItem from './TodoItem';
import "./Todos.css";

function Todos(props) {
  return (
    <div className='container my-3' id='myStyle'>
      <>
        <h3 className=' my-3 '>Todos List</h3>
        {props.todos.length === 0 ? <h5>The list is empty</h5> : props.todos.map((todo) => {
          return (<div key={todo.sno}><TodoItem  todo={todo} onDelete={props.onDelete} /> <hr /> </div>)
        })}



      </>
    </div>
  )
}

export default Todos
