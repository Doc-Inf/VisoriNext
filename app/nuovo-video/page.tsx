import FormVideo from "@/components/form/form-video";
import { fetchSubjects, fetchTopics } from "@/components/hero/video-feed";

export default async function Page() {
  const subjects = await fetchSubjects();
  const topics = await fetchTopics();

  return (
    <>
      <FormVideo subjects={subjects} topics={topics} />
    </>
  );
}
