/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";

export default function useAddComment(onSuccess) {

    const commentRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);


    useEffect(() => {
        // Keyboard event listener to add a comment on Ctrl+Enter
        const listener = async (e) => {
            if(e.key === 'Enter' && e.ctrlKey) {
                setIsSubmitting(true);
                setSubmitError(null);

                try {
                    const response = await fetch ('/api/comments', {
                        method: 'POST',
                        body: JSON.stringify({ comment: commentRef.current.value }),
                    })
                    const data = await response.json();
                    onSuccess
                }
                catch {
                    setSubmitError('Something went wrong. Please try again later.')
                }
                finally {
                    setIsSubmitting(false);
                }
            }

            // Adds listener to the window object
            window.addEventListener('keydown', listener);

            return () => {
                // Removes listener from the window object
                window.removeEventListener('keydown', listener);
            }
        }
    }, [])

    return { commentRef, isSubmitting, submitError };
}