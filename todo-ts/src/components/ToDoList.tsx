
import type { TodoListProps } from "../types/todo";


const ToDoList = ({todos, setTodos}:TodoListProps) => {


    return (
        <>

        
            <ul>
                {todos.map(todo=>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}

export default ToDoList;