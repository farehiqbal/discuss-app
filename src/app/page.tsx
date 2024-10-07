import TopicCreateForm from "@/components/topics/topic-create-form"
import TopicList from "@/components/topics/topics-list"
import { Divider } from "@nextui-org/react"
import PostList from "@/components/posts/post-list"
import { fetchTopPosts } from "@/db/queries/post"

export default function Home() {
  return <div className="dark">
  <div className="grid grid-cols-4 gap-4 p-4 dark:bg-black dark:text-white">

    <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts}></PostList>
    </div>
    <div className="border shadow py-3 px-2">
      <div className="flex justify-center items-center">
        <TopicCreateForm />
      </div>
      <Divider className="my-2"></Divider>
      <h3 className="text-lg m-2">Topics</h3>
      <TopicList />
    </div>

  </div>
  </div>
} 
