function TodoItem({ todo, deleteTodo }) {

  return (
    <li>
      {todo}

      <button onClick={() => deleteTodo(todo)}>
        Xóa
      </button>

    </li>
  )
}

export default TodoItem