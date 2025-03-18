import { useQuery } from "@tanstack/react-query";
import { getPosts } from '../api/posts'

export default function PostsList2() {
    const {data, status, error} = useQuery({
        queryKey: ['postsWDS'],
        queryFn: () => getPosts(),
        staleTime: 1000 * 2,
        refetchInterval: 1000 * 4,
    })

// if (postsQuery.status === "loading")  return <h1>Loading...</h1>
    // if (postsQuery.status === "error") return <h1>{postsQuery.error.message}</h1> 
    if (status === "pending")  return <h1>Loading...</h1>
    if (status === "error") return <h1>{error.message}</h1> 
    
    return (
        <div>
            <h1>Posts List 2</h1>
            {data.slice(5, 10).map(data => <li key={data.id}>{JSON.stringify(data.title)}</li>)}
            {/* {JSON.stringify(data)} */}
        </div>
    )
}