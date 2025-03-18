// Pagination

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPostsPaginated } from "../api/posts";

/**
 * PostListsPaginated
 * 
 * This component displays a paginated list of posts.
 * The component uses the `useQuery` hook from `react-query` to fetch the list of posts.
 * The `keepPreviousData` option is set to `true` so that the component keeps the previous data
 * when the component is re-rendered.
 * The `queryKey` is an array of two elements: the first element is the key of the query, and the second element
 * is an object with the property `page` which is the number of the page to fetch.
 * The `queryFn` is a function that fetches the list of posts and returns it.
 * The component displays an error message if there is an error.
 * The component displays a message "Loading..." if the data is not yet available.
 * The component displays the list of posts if the data is available.
 * The component displays two buttons: "Previous" and "Next". The "Previous" button allows the user to go to the
 * previous page. The "Next" button allows the user to go to the next page.
 * The component uses the `useState` hook to keep track of the current page.
 * The component updates the current page when the user clicks on the "Previous" or "Next" button.
 * The component renders the list of posts based on the current page.
 */
export default function PostListPaginated() {

    const [page, setPage] = useState(1);
    const limit = 2

    const {status, error, data, isPreviousData} = useQuery({
        queryKey: ['postsWDS', {page, limit}],
        keepPreviousData: true,
        queryFn: () => getPostsPaginated(page, limit),
    })

    if (status === "pending")  return <h1>Loading...</h1>
    if (status === "error") return <h1>{JSON.stringify(error.message)}</h1>

    return (
        <>
            <h1>Post List Paginated
                <br />
                <small>{isPreviousData && "Previous data"}</small>
            </h1>
            {data.posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
            {data.previousPage && (
                <button onClick={() => setPage(data.previousPage)}>Previous</button>
            )}
            {data.nextPage && (
                <button onClick={() => setPage(data.nextPage)}>Next</button>
            )}
        </>
    )
}