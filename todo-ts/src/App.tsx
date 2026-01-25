import ToDoList from "./components/ToDoList"
import type { TodoItem } from "./types/todo"
import { useState } from "react"


const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])



  return (
    <>

    <ToDoList
    todos ={todos}
    setTodos = {setTodos}
    />

    </>
  )
}

export default App
