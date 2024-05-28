import FormVideo from "@/components/form/form-video";
import { fetchSubjects, fetchTopics } from "@/components/hero/video-feed";
import RouteProvider from "@/lib/providers/route-provider";

export default async function Page() {
  const subjects = await fetchSubjects();
  const topics = await fetchTopics();

  return (
    <RouteProvider>
      <FormVideo subjects={subjects} topics={topics} />
    </RouteProvider>
  );
}
