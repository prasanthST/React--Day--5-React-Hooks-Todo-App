import { useState, useEffect } from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList";
import 'bootstrap/dist/css/bootstrap.min.css'; 


const App = () => {

  const initTodos = [
    { id: 1, name: "Learn React", Description: "Study the basics of React", status: "Not Completed" },
    { id: 2, name: "Build a Todo App", Description: "Create a simple todo application", status: "Not Completed" },
    { id: 3, name: "Learn NodeJS", Description: "Study the basics of NodeJS", status: "Not Completed" },
  ];
  const [todos, setTodos] = useState(initTodos);
  const [filter, setFilter] = useState("all");

  // Function to add a Todo
  const addTodo = (newtodo) => {
    const todoWithId = { ...newtodo, id: Date.now() }; 
    setTodos([...todos, todoWithId]);
  };

  // Function to delete the todo
  const deleteTodo = (id) => {
    const deletetodo = todos.filter(todo => todo.id !== id);
    setTodos(deletetodo);
  };

  // Function to edit the Todo
  const editTodo = (id, updateName, updateDescription) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, name: updateName, Description: updateDescription } : todo
    ));
  };

  // Toggle status
  const toggleStatus = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status:todo.status === 'Not Completed' ? 'Completed' : 'Not Completed' } : todo
    ));
  };

  // Filter function
  const filteredTodos = todos.filter(todo => {
    if (filter === "Completed") return todo.status === 'Completed';
    if (filter === "Not Completed") return todo.status === 'Not Completed';
    return true;
  });

  // Log todos whenever they change
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const selectStyle = {
    backgroundColor: filter === "Completed" ? 'green' :
                     filter === "Not Completed" ? 'gray' :'red',
    color: filter === "Completed" || filter === "Not Completed" ? 'white' : 'white'
  };

  return (
    <>
     <div className="container-fluid">
      <div className="app">
        <h6 className="mt-3">My Todo</h6>
        <Todoform addTodo={addTodo} />
        <div className="d-flex mt-5 justify-content-around">
        <p className="todo">My todo</p>
        <div className="filterselect">
        <label>Status Filter :</label>
        <select className=" filterbutton ms-2 p-1" style={selectStyle} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
        </div>
        </div>
        <TodoList todos={filteredTodos} deleteTodo={deleteTodo} editTodo={editTodo} toggleStatus={toggleStatus} />
        </div>
      </div>
    </>
  );
};

export default App;