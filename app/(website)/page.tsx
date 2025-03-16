import { auth } from "@/auth";
import PostCard from "@/components/post/post-card";
import HeadingText from "@/components/ui/heading-text";
import HeroSection from "@/components/ui/hero-section";
import { getAllPosts } from "@/lib/action/post/get-post";

export default async function Home() {
  const posts = await getAllPosts()
  const session = await auth()
  return (
    <div>
      <div className="flex flex-col gap-4 w-full ">
      <div className="h-80 w-full mx-auto max-w-screen-xl">
        <HeroSection
        />        
      </div>
      <div className="mx-auto max-w-screen-xl w-full  px-4 lg:px-0 pt-0 md:pt-36">
      <HeadingText
            title="Latest Posts"
            subtitle="See the latest posts here"
          />
      </div>
      <div className="grid grid-cols-1 mx-auto max-w-screen-xl w-full sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4 lg:px-0">
      {posts.length > 0 ? (
              posts.map((post) => (
                <PostCard key={post.id} post={post} sessionUserEmail={session?.user?.email || ''} />
              ))
            ) : (
              <p className="text-center text-gray-500">No posts available.</p>
            )}
        </div>

     </div>
    </div>
  );
}
