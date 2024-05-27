import Heading from "@/components/hero/heading";
import SearchBar from "@/components/hero/search-bar";
import VideoFeed from "@/components/hero/video-feed";
import TextLG from "@/components/typhography/textLG";
import Category from "@/components/videos/category";
import { getClientVideos } from "@/constants/functions";
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
