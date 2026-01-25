

export type TodoItem = {
    id: number
    title: string
    description?: string
    status: 'active' | 'done'
}

export type TodoListProps = {
    todos: TodoItem[]
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}
