import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";
// get type for topic from db
import type { Topic } from "@/types/types";

export type TopicWithoutPosts = {
  id: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};


export default async function TopicList() {
  const topics: TopicWithoutPosts[] = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="bordered">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
