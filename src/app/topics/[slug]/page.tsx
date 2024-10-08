import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/post";

interface TopicShowPageProps {
    params: {
        slug: string;
    }
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
    const { slug } = params;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
            {/* Main Content - Posts */}
            <div className="lg:col-span-3">
                <h1 className="text-xl lg:text-2xl font-bold mb-4">
                    {slug}
                </h1>
                {/* Posts List */}
                <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
            </div>

            {/* Sidebar - Post Create Form */}
            <div className="lg:col-span-1 order-first lg:order-none">
                <PostCreateForm slug={slug} />
            </div>
        </div>
    );
}
