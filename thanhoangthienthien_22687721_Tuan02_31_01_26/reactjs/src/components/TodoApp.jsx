import { useState } from "react"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import TodoList from "./TodoList"

function TodoApp() {

  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodo = (text) => {
    setTodos(todos.filter(t => t !== text))
  }

  return (
    <div>

      <h1>Todo App</h1>

      <TodoInput addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />

    </div>
  )
}

export default TodoApp