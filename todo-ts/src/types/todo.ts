import type React from "react"


export type TodoItem = {
    id: number
    title: string
    description?: string
    status: boolean
}

export type TodoListProps = {
    todos: TodoItem[]
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export type ButtonsProps = {
    setTodos : React.Dispatch<React.SetStateAction<TodoItem[]>>;
    elementId? : number
    
}

export type DraftTodo = {
    text: string
    
}