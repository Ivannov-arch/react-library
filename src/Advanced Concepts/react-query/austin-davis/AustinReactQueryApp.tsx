// import React from 'react'
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
// import { useState } from 'react'
import createTodoQueryOptions from "./queryOptions/createTodoQueryOptions";
import { useQueries, useSuspenseQueries } from "@tanstack/react-query";
import createPostsQueryOptions from "./queryOptions/createPostsQueryOptions";
import createUsersQueryOptions from "./queryOptions/createUsersQueryOptions";
import Card from "./Card";
import { Link } from "react-router-dom";

//#region : loading, error, refetch example
// export default function AustinReactQueryApp() {

//     const { data, isPending, refetch, error } = useQuery({
//         queryKey: ['todos', id],
//         queryFn: () => getTodos(id)
//     })

//     if(error) {
//         alert("Something went wrong");
//     }

//   return (
//     <>
//         <div>{isPending ? <p>Loading...</p> : JSON.stringify(data.slice(0, 10))}</div>
//         <button onClick={() => refetch()}>Refetch</button>
//     </>
//   )
// }

// const getTodos = async () => {
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     return await res.json()
// }

//#endregion

//#region : query options (parameters)
// export default function AustinReactQueryApp() {

//     const [id, setId] = useState(1)
//     const {data, isPending} = useQuery ({
//         queryKey: ['todos', id],
//         queryFn: () => getTodos(id)
//     })

//   return (
//     <>
//         <div>{isPending ? <p>Loading...</p> : JSON.stringify(data.slice(0, 10))}</div> <br />
//         <div className='inline-block'>{id != 1 ? <button onClick={() => setId((curr) => curr - 1)}>Decrement ID</button> : <p>1st Post</p>}</div>
//         <button onClick={() => setId((curr) => curr + 1)}>Increment ID</button>
//     </>
//   )
// }

// const getTodos = async (id) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
//     return await res.json()
// }

//#endregion

//#region : enable query
// export default function AustinReactQueryApp() {

//     const [on, setOn] = useState(true)
//     const { data, isPending } = useQuery({
//         queryKey: ['todos'],
//         queryFn: getTodos,
//         enabled: on
//     })

//   return (
//     <>
//         <div>{isPending ? <p>Loading...</p> : JSON.stringify(data.slice(0, 10))}</div>
//         <button onClick={() => setOn(!on)}>{on? "Off" : "On"}</button>
//     </>
//   )
// }

// const getTodos = async () => {
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${1}`)
//     return await res.json()
// }

//#endregion

//#region : reusable query options

// export default function AustinReactQueryApp() {
//   const { data, isPending } = useQuery(createTodoQueryOptions());

//   return (
//     <>
//       <div>
//         {isPending ? (
//           <p>Loading...</p>
//         ) : (
//           <p>{JSON.stringify(data?.slice(0, 10))}</p>
//           // <p>{data[0]?.completed}</p> // you can ctrl + Enter to check the props
//         )}
//       </div>
//     </>
//   );
// }

//#endregion

//#region : useSuspenseQuery()
// export default function AustinReactQueryApp() {
//   // the data will never be undefined, but can't use enabled option
//   const { data, isPending } = useSuspenseQuery(createTodoQueryOptions());

//   return (
//     <>
//       <div>
//         {isPending ? (
//           <p>Loading...</p>
//         ) : (
//           <p>{JSON.stringify(data?.slice(0, 10))}</p>
//           // <p>{data[0]?.completed}</p> // you can ctrl + Enter to check the props
//         )}
//       </div>
//     </>
//   );
// }
//#endregion

//#region  : useQueries(), doing multiple queries asynchronously

// export default function AustinReactQueryApp() {
//   // the data will never be undefined, but can't use enabled option

//   // const [{ data, isPending }, result2, result3] = useQueries({
//   const [{ data, isPending }, result2, result3] = useSuspenseQueries({
//     queries: [
//       createTodoQueryOptions(),
//       createUsersQueryOptions(),
//       createPostsQueryOptions(),
//     ],
//   });

//   return (
//     <>
//       <div>
//         {isPending ? (
//           <p>Loading...</p>
//         ) : (
//           <p>{JSON.stringify(data?.slice(0, 10))}</p>
//           // <p>{data[0]?.completed}</p> // you can ctrl + Enter to check the props
//         )}
//       </div>
//     </>
//   );
// }
//#endregion

//#region : useQueries(), doing multiple queries synchronously
export default function AustinReactQueryApp() {
  return (
    <>
      <Link to="https://youtu.be/r8Dg0KVnfMA?si=https://youtu.be/mPaCnwpFvZY?si=znyddf0zSuuUdrSC">
        Learn Here
      </Link>
      <button onClick={() => window.history.back()} className="text-indigo-600">
        Back
      </button>
      <Card></Card>
    </>
  );
}

//#endregion
