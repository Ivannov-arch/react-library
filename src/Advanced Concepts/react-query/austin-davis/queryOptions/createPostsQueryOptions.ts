import { queryOptions } from '@tanstack/react-query'

export default function createPostsQueryOptions(randomId?: number) {
    return queryOptions({
        queryKey: ['posts', randomId],
        queryFn: () => getPosts(randomId),
    })
}

const getPosts = async (randomId?: number): Promise<Posts[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${randomId}`)
    return await res.json()
}

// adding type (optional)
type Posts = {
    userId: number,
    name: string
}