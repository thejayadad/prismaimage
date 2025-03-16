"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    imageUrl: string;
    user: { email: string; image: string | null };
  };
  sessionUserEmail?: string; // Email of the logged-in user
}

const PostCard: React.FC<PostCardProps> = ({ post, sessionUserEmail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Fade-in effect
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative bg-white rounded-lg shadow-md overflow-hidden"
    >
      {/* Post Image */}
      <div className="relative w-full h-48">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          {post.user.image ? (
            <Image
              src={post.user.image}
              alt={post.user.email}
              width={32}
              height={32}
              className="rounded-full border border-gray-300"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
              ?
            </div>
          )}
          <p className="text-gray-600 text-sm">{post.user.email}</p>
        </div>

        {/* Post Title */}
        <h2 className="text-md font-semibold text-gray-900 mt-2">{post.title}</h2>

        {/* "See More" Button - Always Visible */}
        <div className="mt-4">
          <Link
            href={`/${post.id}`}
            className="inline-block bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            See More
          </Link>
        </div>

        {/* Edit Button for Author - Always Visible if User is Author */}
        {sessionUserEmail === post.user.email && (
          <div className="mt-2">
            <Link
              href={`/post/${post.id}`}
              className="text-neutral-600 hover:underline text-sm"
            >
              Edit Post
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PostCard;
