import React, { memo } from 'react';

const TodoItem = memo(({ id, text, completed, onToggleTodo, onDeleteTodo }) => {
  console.log('render item', id); // Log khi mỗi item render lại

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleTodo(id)}
      />
      {text}
      <button onClick={() => onDeleteTodo(id)}>Delete</button>
    </li>
  );
});

export default TodoItem;