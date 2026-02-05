
import type { DraftTodo, TodoListProps } from "../types/todo";
import EditButtons from "./EditButtons";

const ToDoList = ({todos, setTodos}:TodoListProps) => {




    const emptyTodoShape :DraftTodo = {
        text: "You can notice your tasks, ideas, and other helpfull things.."
    }

  


    return (
        <>
            {todos.length > 0 ? (
                <>
                <ul>
                {todos.map(todo=>(
                    <li key={todo.id}>
                        
                        {todo.status ? `${todo.title} DONE!` : todo.title}
                        <EditButtons setTodos = {setTodos} elementId={todo.id} />
                    </li>
                    
                ))}
                </ul>
                
                </>
            ) 
            :
            (<div>{emptyTodoShape.text}</div>)}
        
            
        </>
    )
}

export default ToDoList;