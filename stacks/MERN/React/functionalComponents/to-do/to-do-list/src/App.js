import './App.css';
import react, {useEffect,useState} from 'react'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {

  const [todos, setTodos] = useState([
    {
        item: "Eat Lunch",
        completed: false
    },
    {
        item: "Eat dinner",
        completed: true
    },
    {
        item: "Eat breakfast",
        completed: false
    },
    {
        item: "Eat snack",
        completed: false
    }
])

  const createTodo = (todo) =>{
    setTodos([...todos, todo])
  }

  const updateTodo = (idx) =>{

    const copyTodos = [...todos];

    copyTodos[idx].completed = !copyTodos[idx].completed;

    setTodos(copyTodos);
  }
  const deleteTodo = (deletedIdx) =>{
    setTodos(todos.filter((todo,i) => i !==deletedIdx ? true : false))
  }
  const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    });



  return (
    <div className="App">
      
    <h1>My Todo List</h1>
    <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click ME!!</button>
    <AddTodo createTodo={createTodo}/>
    <h1>Todo List:</h1>
    <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
