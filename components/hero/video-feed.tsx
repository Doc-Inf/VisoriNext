"use client";
import Category from "../videos/category";
import SearchBar from "./search-bar";
import { useState } from "react";
import useHomeFetching from "@/lib/hooks/useHomeFetching";
import { ClientVideo } from "@/constants/types";

export default function VideoFeed({
  videos,
  subjs,
  topics,
  selected,
  setSelected,
  loading,
}: {
  videos: ClientVideo[];
  subjs: string[];
  topics: Map<string, Set<string>>;
  selected: { subject: string; topic: string };
  setSelected: React.Dispatch<
    React.SetStateAction<{ subject: string; topic: string }>
  >;
  loading: boolean;
}) {
  return (
    <>
      <SearchBar
        subjects={subjs}
        topics={topics}
        selected={selected}
        setSelected={setSelected}
      />
      <Category selected={selected} videos={videos ?? []} />
    </>
  );
}
