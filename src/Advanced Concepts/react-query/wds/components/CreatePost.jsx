/* eslint-disable react/prop-types */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {createPost} from '../api/posts';
import { useRef} from 'react'
import Post from "./Post";

export default function CreatePost({setCurrentPage}) {
    const titleRef = useRef();
    const bodyRef = useRef();
    const idRef = useRef();
    const queryClient = useQueryClient()

    const createPostMutation = useMutation({
        // mutationFn: (variables) => createPost(variables),
        mutationFn: createPost,

        // onSuccess: (data, variables, context),
        // onError: (error, variables, context)
        // onSettled: (data, error variables, context)
        // onMutate: (variables)

        onSuccess: (data, variables, context) => {
            console.log(context, data, variables) //
            queryClient.setQueryData(["postsWDS", data.id], data)
            queryClient.invalidateQueries(["postsWDS"], {exact: true})
            setCurrentPage(<Post id={data.id}/>)
        },
        
        onMutate: () => {
        // onMutate: (variables) => {
            return {hi: "bye"}
        }
    })


    // createPostMutation.mutateAsync().then(() => {})
    // createPostMutation.mutate({}, {onError})
    function handleSubmit(e) {
        e.preventDefault();
        createPostMutation.mutate({
            title: titleRef.current.value,
            body: bodyRef.current.value,
            id: idRef.current.value
        })
    }

  return (
    <div>
        {createPostMutation.isError && `
        ${JSON.stringify(createPostMutation.error)}
        `}
        {/* sorry but we can't edit the data from this api, just pretend we can */}
        
        <h1>create Post</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input className="my-1 border rounded" type="text" id="title" ref={titleRef} />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <input className="my-1 border rounded" type="text" id="body" ref={bodyRef} />
            </div>
            <div>
                <label htmlFor="id">ID (10-14)</label>
                <input className="my-1 border rounded" type="text" id="id" ref={idRef} />
            </div>
            <button disabled={createPostMutation.isLoading}>
                {createPostMutation.isLoading ? "Loading..." : "Create"}
            </button>
        </form>
    </div>
  )
}

