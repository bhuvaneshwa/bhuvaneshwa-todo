import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{
          border: '1px solid #8C8C8C',
        }}
      />
      <button type="submit"> {editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;
