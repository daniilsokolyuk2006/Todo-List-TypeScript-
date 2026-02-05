import type { ButtonsProps } from "../types/todo";


const EditButtons = ({setTodos, elementId} : ButtonsProps) => {
    
    
    const onDelete = () => {
        setTodos(prev => prev.filter(todo => todo.id !== elementId));
    }

    const toggleComplete = () => {
        setTodos(prev => prev.map(todo => todo.id === elementId ? {...todo, status: !todo.status} : todo))
    }

    
    

    return(
        <>
            <div className="edit-btn-wrapper">
                <button className="edit-btn" onClick={toggleComplete}>Complete</button>
                <button className="edit-btn">Edit</button>
                <button className="edit-btn" onClick={onDelete}>Delete</button>
            </div>
        </>
    ) 
}

export default EditButtons