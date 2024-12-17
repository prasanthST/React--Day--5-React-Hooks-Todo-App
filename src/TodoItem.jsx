import { useState } from "react";
import PropTypes from "prop-types";


const TodoItem = ({ todo, deleteTodo, editTodo, toggleStatus }) => {
  const [isediting, setIsEditing] = useState(false);
  const [updateName, setUpdateName] = useState(todo.name);
  const [updateDescription, setUpdateDescription] = useState(todo.Description);

  const handleEdit = () => {
    editTodo(todo.id, updateName, updateDescription);
    setIsEditing(false);
  };

  const selectStyle = {
    backgroundColor: todo.status === "Completed" ? 'green' : 'red'
                     ,
    color: 'white'
  };

  return (
    <div className="todo-card">
    <div className="card mt-3" style={{width:"auto"}} >
      <div className="card-body">
        {isediting ? (
          <>
          <div className="form">
          <form>
            <input
              type="text"
              className="forminput mb-2"
              placeholder="Update Name"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
            <input
              type="text"
              className="forminput me-4"
              placeholder="Update Description"
              value={updateDescription}
              onChange={(e) => setUpdateDescription(e.target.value)}
            />
            <button onClick={handleEdit} className="btn btn-success me-2">Save</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
            </form>
            </div>
          </>
        ) : (
          <>
            <p className="card-title">Name : {todo.name}</p>
            <p className="card-text">Description : {todo.Description}</p>
            <p>
              Status :
              <select
                className="custom-select ms-2"
                style={selectStyle}
                value={todo.status}
                onChange={() => toggleStatus(todo.id)}
              >
                <option value="Not Completed">Not Complete</option>
                <option value="Completed">Complete</option>
              </select>
            </p>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-success me-3"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};
TodoItem.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    toggleStatus: PropTypes.func.isRequired,
  };

export default TodoItem;