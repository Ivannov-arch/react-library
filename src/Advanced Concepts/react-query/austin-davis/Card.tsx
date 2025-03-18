import createUsersQueryOptions from "./queryOptions/createUsersQueryOptions";
import createPostsQueryOptions from "./queryOptions/createPostsQueryOptions";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export default function Card() {
  // 2. Or just use 'useSuspenseQuery()'
  const { data: users } = useSuspenseQuery(createUsersQueryOptions());
  // const { data: users } = useQuery(createUsersQueryOptions());

  // 1. Manual checking with 'enabled'
  const randomId = Math.floor(Math.random() * users.length);
  const { data: posts, isPending } = useQuery(
    // {...createPostsQueryOptions(randomId), enabled: !!users}
    createPostsQueryOptions(randomId)
  );

  return (
    <div className="p-4 border-2 border-blue-500">
      <h1 className="mb-2 text-blue-500 text-5xl">CARD</h1>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <p>{JSON.stringify(posts?.slice(0, 10))}</p>
      )}
    </div>
  );
}
