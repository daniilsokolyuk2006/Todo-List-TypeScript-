import type { ButtonsProps, TodoItem } from "../types/todo";
import { useState } from "react";


const AddForm = ({setTodos}: ButtonsProps) => {

    const [inputValue, setInputValue] = useState<string>("")

    const onAdd = () : void => {

        if(!inputValue.trim()) return;

        const newTodo : TodoItem = {
            id: Date.now(),
            title: inputValue,
            status : false
        }

        setTodos(prev => [newTodo, ...prev ])
        setInputValue("");
    }

    return (
            <>
            <h1>Add some task:</h1>
            <input value={inputValue} id="add-input" placeholder="You can write here.." onChange={e => setInputValue(e.target.value)}></input>  
            <button className="add-btn" onClick={onAdd}>+</button> 
            </>) 
}

export default AddForm; 