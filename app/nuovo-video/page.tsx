"use client";
import FormVideo from "@/components/form/form-video";
import useSubjectFetching from "@/lib/hooks/useSubjectFetching";
import useTopicFetching from "@/lib/hooks/useTopicFetching";
import RouteProvider from "@/lib/providers/route-provider";

export default function Page() {
  const { data: subjs, loading: subLoading } = useSubjectFetching();
  const { data: topics, loading: topLoading } = useTopicFetching();
  const loading = subLoading || topLoading;
  return (
    <RouteProvider>
      {!loading && subjs && topics && (
        // remove all subjects from the list
        <FormVideo subjects={subjs.slice(1)} topics={topics} />
      )}
    </RouteProvider>
  );
}
