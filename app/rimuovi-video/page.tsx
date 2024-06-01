"use client";
import { VideoTable } from "@/components/table/video/delete-video-table";
import { columns } from "@/components/table/video/columns";
import RouteProvider from "@/lib/providers/route-provider";
import useVideoFetching from "@/lib/hooks/useVideoFetching";

export default function DeleteVideoTable() {
  const { data: videos, loading, error } = useVideoFetching({});

  return (
    <RouteProvider>
      <div className="mt-20">
        {!loading && videos && <VideoTable columns={columns} data={videos} />}
      </div>
    </RouteProvider>
  );
}
