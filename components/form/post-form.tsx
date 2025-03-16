"use client";

import React, { useState } from "react";
import ImageUploadForm from "./image-form";
import TitleForm from "./title-form";
import DescriptionForm from "./description-form";
import { SubmitButton } from "./submit-btn";
import { createPost } from "@/lib/action/post/create-post";
import { toast } from "sonner";
import { updatePost } from "@/lib/action/post/update-post";

interface PostFormProps {
  userEmail: string;
  initialData?: {
    title?: string;
    description?: string;
    imageUrl?: string;
  };
  postId?: string;
}

const PostForm: React.FC<PostFormProps> = ({ userEmail, initialData, postId }) => {
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<Record<string, string[] | undefined>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    if (image) {
      formData.append("imageUrl", image);
    }

    try {
      if (postId) {
        await updatePost(postId, formData);
        toast.success("Post updated successfully!");
      } else {
        await createPost(formData);
        toast.success("Post created successfully!");
      }
    } catch (err: any) {
      setError(err.error || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <input type="hidden" name="userEmail" value={userEmail} />

      {/* Image Upload */}
      <div className="col-span-1">
        <ImageUploadForm
          error={error?.imageUrl?.[0]}
          initialPreview={initialData?.imageUrl}
          onImageChange={setImage}
        />
      </div>

      {/* Text Inputs */}
      <div className="col-span-1">
        <TitleForm initialData={{ title: initialData?.title || "" }} error={error?.title?.[0]} />
        <DescriptionForm initialData={{ description: initialData?.description || "" }} error={error?.description?.[0]} />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end col-span-2">
        <SubmitButton label={postId ? "Update" : "Create"} disabled={loading} />
      </div>
    </form>
  );
};

export default PostForm;
