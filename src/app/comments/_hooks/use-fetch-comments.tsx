import { useCallback, useEffect, useState } from 'react';

import type { Comment } from '../_components/comments';

export default function useFetchComments() {
  // State for fetch Comments
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchComments = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/comments');
      const data = await response.json();
      setComments(data.data);
    } catch (error) {
      console.error(error);
      setError('Something went wrong while fetching comments');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch comments and manage loading and error states
  useEffect(() => {
    handleFetchComments();
  }, [handleFetchComments]);

  return { comments, loading, error, refetch: handleFetchComments };
}
