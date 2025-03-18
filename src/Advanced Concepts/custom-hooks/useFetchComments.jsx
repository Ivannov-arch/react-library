import { useCallback, useEffect, useState } from "react";

export default function useFetchComments() {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFetchComments = useCallback(async() => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch ('/api/comments');
            const data = await response.json();
            setComments(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        handleFetchComments();
    }, [handleFetchComments]);

    return { comments, isLoading, error, refetch: handleFetchComments };
}