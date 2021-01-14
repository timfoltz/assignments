import react, {useState} from 'react'
import TodoItem from './TodoItem';


const TodoList = ({todos, updateTodo, deleteTodo}) =>{

    


    return(

            todos.map((todo,idx)=>
                <TodoItem 
                    todo={todo} 
                    idx={idx} 
                    key={idx} 
                    updateTodo={updateTodo} 
                    deleteTodo={deleteTodo}
                    
                />
            
            )


    );
};

export default TodoList;