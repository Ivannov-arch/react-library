import { useQuery } from "@tanstack/react-query";
import { getPosts } from '../api/posts'

export default function PostsList1() {
    // const postsQuery = useQuery(['postsWDS'], () => getPosts())
    const {data, status, error} = useQuery({
        queryKey: ['postsWDS'],
        queryFn: () => getPosts(),
        staleTime: 1000 * 2,
        refetchInterval: 1000 * 4,
        initialData:[{ id: 1, title: 'initial data' }], // replace depends on staleTime
        placeholderData:[{ id: 1, title: 'initial data' }], // replace immediately when the fetch is done
    })
    // console.log(data)

    // if (postsQuery.status === "loading")  return <h1>Loading...</h1>
    // if (postsQuery.status === "error") return <h1>{postsQuery.error.message}</h1> 
    if (status === "pending")  return <h1>Loading...</h1>
    if (status === "error") return <h1>{error.message}</h1> 


     //#region : useQueries

    // const queries = useQueries({ queries: (data ?? []).map(post => {
    //     return{
    //         queryKey: ['postsWDS', post.id],
    //         queryFn: () => getPosts(post.id),
    //     }
    // })})
    // console.log(queries.map(q => q.data))
    //#endregion
    
    return (
        <div>
            <h1>Posts List 1</h1>
            {data.slice(0, 5).map(data => <li key={data.id}>{JSON.stringify(data.title)}</li>)}
            {/* {JSON.stringify(data)} */}
        </div>
    )
}