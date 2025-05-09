import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsPaginated } from "../api/posts";

export default function PostInfinite() {
  const limit = 1;

  const {
    status,
    error,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["postsWDS"],
    getNextPageParam: (lastPage) => lastPage.nextPage,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam, limit),
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error")
    return <h1>{error instanceof Error ? error.message : "Error occurred"}</h1>;

  // Pastikan data dan pages ada sebelum diakses, dan tampilkan loading button jika sedang fetching
  const posts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <>
      <h1>Post Infinite</h1>

      {/* Menampilkan loading state jika belum ada posts atau data sedang di-fetch */}
      {posts.length === 0 && status === "loading" ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => <div key={post.id}>{post.title}</div>)
      )}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Next"}
      </button>
    </>
  );
}
