import react, {useState} from 'react'


const AddTodo = ({todos, createTodo}) =>{



    const [todoText, setTodoText] = useState("")
    const submitTodo = (event) =>{
        event.preventDefault();

        createTodo({
            'item' : todoText,
            'completed' : false
        });
        
        setTodoText("")

    }


    return(

        <div>
            {todoText}
            <form onSubmit={submitTodo}>
                <input type="text" name="todo" value ={todoText} onChange={ e => setTodoText(e.target.value)}/>
                <input type="submit" value="Create new Todo"/>
            </form>
        </div>
        
            )


    
};

export default AddTodo;