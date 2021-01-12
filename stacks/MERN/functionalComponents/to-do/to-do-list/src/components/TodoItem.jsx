import react, {useEffect, useState} from 'react'


const TodoItem = ({todo, idx, updateTodo, deleteTodo}) =>{

    const checked = {
        'textDecoration' : 'line-through'
    };
    const unchecked = {};
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    });
    return(

        <p style={todo.completed ? checked : unchecked }>
            
            {todo.item}: <input
                            type="checkbox" 
                            checked={todo.completed} 
                            onClick = {(e) => updateTodo(idx)}
                        />
                        <button onClick={(e) => {deleteTodo(idx)}}>Delete</button>
        </p>

    );
};

export default TodoItem;