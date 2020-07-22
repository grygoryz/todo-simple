export type TaskType = {
    id: number
    date: string
    title: string
    description: string
    completed: boolean
    important: boolean
    timestamp: number
}

export type TasksListType = Array<TaskType>
