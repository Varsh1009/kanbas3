const TodoItem = ({
  todo = { done: true, title: "Buy milk", status: "COMPLETED" },
}) => {
  return (
    <div className="todo">
      <h3>Todo Item</h3>
      <li className="list-group-item">
        <input type="checkbox" className="me-2" defaultChecked={todo.done} />
        {todo.title} ({todo.status})
      </li>
      <hr />
    </div>
  );
};
export default TodoItem;
