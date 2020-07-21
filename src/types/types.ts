export type Task = {
    id: number
    date: string
    title: string
    description: string
    completed: boolean
    important: boolean
    timestamp: number
}

export type TasksList = Array<Task>