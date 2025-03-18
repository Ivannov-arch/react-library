/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { getPostsById } from "../api/posts-id";
import { getUsers } from "../api/users";


export default function Post( {id, message} ) {
    const {data, status, error} = useQuery({
        queryKey: ['postsWDS', id],
        queryFn: () => (getPostsById(id))
    })

    const UserQuery = useQuery({
        queryKey: ['users', data?.userId],
        queryFn: () => getUsers(data?.userId),
        enabled: !!data
    })

    if(status === "pending")  return <h1>Loading...</h1>
    if (status === "error") return <h1>{JSON.stringify(error)}</h1>

    return (
        <>
            <h1>
                <small>{message}</small> <br />
                {JSON.stringify(data.title)} <br />
                <small>
                    {`UserID: ${JSON.stringify(data.userId)}`} <br />
                    {`Id: ${JSON.stringify(data.id)}`}
                    {UserQuery.isLoading ? 
                    "Loading User..." :
                    UserQuery.isError ? 
                    "Error Loading User" :
                    UserQuery.data.name}
                </small>
            </h1>
            <p>{data.body}</p>
        </>
    )
}