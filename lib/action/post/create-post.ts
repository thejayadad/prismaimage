"use server";

import { z } from "zod";
import { put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CreateSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  userEmail: z.string().email({ message: "User email is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export const createPost = async (formData: FormData) => {
  try {
    console.log("Form Data:", Array.from(formData.entries()));

    const validatedFields = CreateSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
      console.error("Validation failed:", validatedFields.error.flatten().fieldErrors);
      return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { title, userEmail, description } = validatedFields.data;

    // Ensure image exists
    const imageFile = formData.get("imageUrl") as File | null;
    if (!imageFile || !(imageFile instanceof File) || imageFile.size === 0) {
      return { error: { imageUrl: ["Image is required"] } };
    }

    let imagePath = "";

    // Upload Image
    try {
      const { url } = await put(imageFile.name, imageFile, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return { message: "Failed to upload image" };
    }

    // Create Post in Database
    const newPost = await prisma.post.create({
      data: { title, userEmail, description, imageUrl: imagePath },
    });

    console.log("Post created successfully:", newPost);


  } catch (error) {
    console.error("Unexpected error in createPost:", error);
    return { message: "Unexpected error occurred" };
  }
  revalidatePath("/");
  redirect("/");
};
