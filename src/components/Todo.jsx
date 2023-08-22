import React from 'react'

function Todo({todo, toggleTodo}) {

    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }

  return (
    <div>
        <lavel>
            <input type="checkbox" checked={todo.comp} onChange={handleTodoClick}/>
        </lavel>
        {todo.name}</div>
  )
}

export default Todo;