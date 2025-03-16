"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deletePost = async (postId: string) => {
  try {
    // Check if the post exists
    const existingPost = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!existingPost) {
      return { message: "Post not found" };
    }

    // Delete the post
    await prisma.post.delete({
      where: { id: postId },
    });

    // Revalidate the page to remove the deleted post

  } catch (error) {
    console.error("Error deleting post:", error);
    return { message: "Failed to delete post" };
  }
  revalidatePath("/");
  redirect("/"); // Redirect after deletion
};
