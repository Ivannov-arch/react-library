// Infinite Scroll

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsPaginated } from "../api/posts";

export default function PostInfinite() {

    const limit = 1
    const {
        status,
        error,
        data, 
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery({
        queryKey: ['postsWDS'],
        getNextPageParam: page => page.nextPage,
        queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam, limit),
        
    })

    if (status === "pending")  return <h1>Loading...</h1>
    if (status === "error") return <h1>{JSON.stringify(error.message)}</h1>

    return (
        <>
            <h1>Post Infinite</h1>
            {data.pages
            .flatMap(data => data.posts)
            .map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
            <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>{isFetchingNextPage ? "Loading..." : "Next"}</button>
        </>
    )
}