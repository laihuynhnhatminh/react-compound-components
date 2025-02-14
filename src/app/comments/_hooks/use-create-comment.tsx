/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useRef, useState } from 'react';

export default function useCreateComment(onSuccessfulSubmit: () => void) {
  // State for create Comment
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const listener = async (event: KeyboardEvent) => {
      if (event.key === 'Enter' && event.ctrlKey) {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
          await fetch('/api/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentRef.current?.value),
          });
          onSuccessfulSubmit();
        } catch (error) {
          console.error(error);
          setSubmitError('Something went wrong while submitting comment');
        } finally {
          setIsSubmitting(false);
          commentRef.current!.value = '';
        }
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [onSuccessfulSubmit]);

  return { commentRef, isSubmitting, submitError };
}
