"use server";

import { prisma } from "@/lib/prisma";

export const getAllPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: { select: { email: true, image: true } }, // Fetch author details
      },
      orderBy: { createdAt: "desc" }, // Sort newest first
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
