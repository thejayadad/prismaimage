"use client";

import React from "react";
import { deletePost } from "@/lib/action/post/delete-post";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

interface DeletePostBtnProps {
  postId: string;
}

const DeletePostBtn: React.FC<DeletePostBtnProps> = ({ postId }) => {
  const handleDelete = async () => {
    try {
      await deletePost(postId);
      toast.success("Post deleted successfully!");
    } catch (error) {
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white py-2 px-4 mt-4 rounded-md flex items-center gap-2 hover:bg-red-600 transition-all"
    >
      <FaTrash /> Delete Post
    </button>
  );
};

export default DeletePostBtn;
