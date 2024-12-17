import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


const TodoList = ({ todos, deleteTodo, editTodo, toggleStatus }) => {
  return (
    <div className="row mt-3">
      {todos.map((todo) => (
        <div className="col-md-4 mb-3" key={todo.id}>
          <TodoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleStatus={toggleStatus} />
        </div>
      ))}
    </div>
  );
};
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    toggleStatus: PropTypes.func.isRequired,
  };
export default TodoList;