import { auth } from '@/auth'
import PostForm from '@/components/form/post-form'
import { redirect } from 'next/navigation'
import React from 'react'

const NewPostPage = async () => {
    const session = await auth()
    const userEmail = session?.user?.email
    if(!session){
        redirect('/')
    }
  return (
   <div>
      <div className="mx-auto max-w-screen-xl px-4 py-6 w-full">
        <div className='flex flex-col gap-4'>
            <div>
            <h1 className="text-lg font-bold">NewPost Pages</h1>
          <p className="font-medium text-gray-600">Create your latest post here</p>
        
            </div>
            <div>
            <PostForm userEmail={userEmail || ''} />
            </div>
        </div>
    </div>
   </div>
  )
}

export default NewPostPage