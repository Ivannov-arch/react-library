import { queryOptions } from '@tanstack/react-query'

export default function createUsersQueryOptions() {
    return queryOptions({
        queryKey: ['users'],
        queryFn: getUsers,
    })
}

const getUsers = async (): Promise<Users[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    return await res.json()
}

// adding type (optional)
type Users = {
    id: number,
    name: string
}