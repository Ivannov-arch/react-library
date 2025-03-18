import { queryOptions } from '@tanstack/react-query'

export default function createTodoQueryOptions() {
    return queryOptions({
        queryKey: ['todos'],
        queryFn: getTodos,
    })
}

const getTodos = async (): Promise<Todo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${1}`)
    return await res.json()
}

// adding type (optional)
type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}