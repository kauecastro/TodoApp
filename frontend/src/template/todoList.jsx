import React from 'react'
import IconButton from './iconButton'
export default props => {
  
  const todoList = () => {
    console.log(props.list)
    const toDos = props.list || [] 
    const rows = toDos.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : '' }> {todo.description} </td>
        <td> 
        <IconButton style='success' icon='check' hide={todo.done}
          onClick={() => props.handleMarkAsDone(todo)} />
        <IconButton style='warning' icon='undo' hide={!todo.done}
          onClick={() => props.handleMarkAsUndone(todo)} />
        <IconButton style='danger' icon='trash-o' hide={!todo.done}
          onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ))
    return rows;  
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {todoList()}
      </tbody>
    </table> 
  )
} 