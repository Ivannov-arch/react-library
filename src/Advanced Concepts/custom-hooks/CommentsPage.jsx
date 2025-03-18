/* eslint-disable no-unused-vars */
import useFetchComments from "./useFetchComments";
import useAddComment from "./useAddComment";

export default function CommentsPage() {
    const { comments, isLoading, error, refetch } = useFetchComments();

    const { commentRef, isSubmitting, submitError } = useAddComment(refetch);
}