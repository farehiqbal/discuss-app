import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topics-list";
import { Divider } from "@nextui-org/react";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/post";

export default function Home() {
  return (
    <div className="dark">
      {/* Ensure no horizontal overflow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 dark:bg-black dark:text-white max-w-full overflow-x-hidden">
        
        {/* Sidebar (Topics) - Display first on mobile */}
        <div className="border shadow py-3 px-2 rounded-lg order-1 md:order-none max-w-full">
          <div className="flex justify-center items-center m-2">
            <TopicCreateForm />
          </div>
          <Divider className="my-2" />
          <h3 className="text-lg m-2">Topics</h3>
          <TopicList />
        </div>

        {/* Main content (Posts) */}
        <div className="md:col-span-3 order-2 md:order-none max-w-full">
          <h1 className="text-xl md:text-2xl m-2">Top Posts</h1>
          <PostList fetchData={fetchTopPosts}></PostList>
        </div>

      </div>
    </div>
  );
}
