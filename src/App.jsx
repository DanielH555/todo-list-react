import { useState } from 'react';
import './App.css';
import FormComponent from './componets/FormComponent';
import TodoList from './componets/TodoList';

////spread operator
////array/objects distructuring

///usage: javascript immutability


///type of functions:
//-function declaration
//-function expression
//-arrow function


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todoList")) || []);

  const handleSubmit = (taskInput) => {
    const newList = [...todos, {
      task: taskInput,
      isCompleted: false,
      id: Math.floor(Math.random() * 1000000000000),
    }];
    setTodos(newList)
    localStorage.setItem("todoList", JSON.stringify(newList))
  }


  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    });
    setTodos(updatedTodos)
  }


  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const handleDeleteAll = () =>{
    setTodos([]);
    localStorage.removeItem("todoList");
  }
  
  

  return (
    <div className="App">
      <header >
        To do list
      </header>
      <FormComponent handleSubmit={handleSubmit} />
      <input className='search-input' type="text" placeholder='search todo...' />
      <TodoList list={todos} handleDelete={handleDelete} handleComplete={handleComplete} deleteAllProp={handleDeleteAll}/>
      
    </div>
  );
  }

  export default App;
