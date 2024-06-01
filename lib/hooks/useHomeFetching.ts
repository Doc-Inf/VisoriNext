import useSubjectFetching from "./useSubjectFetching";
import useTopicFetching from "./useTopicFetching";
import useVideoFetching from "./useVideoFetching";

export default function useHomeFetching(query: string) {
  const { data: videos, error, loading } = useVideoFetching({ query });
  const {
    data: subjs,
    error: subjsError,
    loading: subjsLoading,
  } = useSubjectFetching();
  const {
    data: topics,
    error: topicsError,
    loading: topicsLoading,
  } = useTopicFetching();

  return {
    videos,
    subjs,
    topics,
    error: error || subjsError || topicsError,
    loading: loading || subjsLoading || topicsLoading,
  };
}
