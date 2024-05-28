import Heading from "@/components/hero/heading";
import VideoFeed from "@/components/hero/video-feed";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <Heading />
      <Suspense fallback={<div>Loading...</div>}>
        <VideoFeed searchParams={searchParams} />
      </Suspense>
    </>
  );
}
