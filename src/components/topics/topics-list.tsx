import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";
import type { Topic } from "@/types/types";

export type TopicWithoutPosts = {
  id: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function TopicList() {
  // Fetch topics from the database
  const topics: TopicWithoutPosts[] = await db.topic.findMany();

  // Map through the topics and render each as a Chip
  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="bordered" className="px-2 py-1">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {renderedTopics}
    </div>
  );
}
