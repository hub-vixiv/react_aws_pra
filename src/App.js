import { useState, useRef } from 'react';
import TodoList from './components/TodoList';
import {v4 as uuidv4} from 'uuid';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name:"Todo1", comp:false},
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const todoName = todoNameRef.current.value;
    if(todoName === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id:uuidv4(), name: todoName, comp:false} ];
    })
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.comp = !todo.comp;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.comp);
    setTodos(newTodos);
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.comp).length}</div>
    </div>
  
  );
}

export default App;
