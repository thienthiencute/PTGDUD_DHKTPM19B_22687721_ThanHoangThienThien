import { useState } from "react"

function TodoInput({ addTodo }) {

  const [text, setText] = useState("")

  const handleAdd = () => {
    addTodo(text)
    setText("")
  }

  return (
    <div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc"
      />

      <button onClick={handleAdd}>Thêm</button>

    </div>
  )
}

export default TodoInput