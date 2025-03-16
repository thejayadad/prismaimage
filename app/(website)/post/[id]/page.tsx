import DeletePostBtn from '@/components/form/delete-post-btn';
import PostForm from '@/components/form/post-form';
import { getPostById } from '@/lib/action/post/get-postbyid';
import React from 'react'

const SinglePostPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const post = await getPostById(id);
  
    console.log(post); // Ensure `imageUrl` and `description` are included
  
    if (!post) {
      return <div>Post not found</div>;
    }
    
    return (
        <div>
      <div className="mx-auto max-w-screen-xl px-4 py-6 w-full">
      <div className='flex flex-col gap-4'>
      <div>
            <h1 className="text-lg font-bold">UpdatePost Page</h1>
          <p className="font-medium text-gray-600">Update your post here</p>
        
            </div>
            <PostForm
        userEmail={post.userEmail}
        initialData={{
          title: post.title,
          description: post.description,
          imageUrl: post.imageUrl, // Pass the current image URL
        }}
        postId={post.id}
      />
        </div>
        <DeletePostBtn postId={post.id} />

            </div>
        </div>

  )
}

export default SinglePostPage