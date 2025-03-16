"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";

interface SubmitButtonProps {
  label: string;
  disabled?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ label, disabled }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx(
        "bg-neutral-700 text-white w-full font-medium py-2.5 px-6 text-base rounded-sm hover:bg-neutral-600",
        {
          "opacity-50 cursor-progress": pending || disabled,
        }
      )}
      type="submit"
      disabled={pending || disabled}
    >
      {label === "Create" ? (
        <>{pending ? "One moment creating..." : "Create Post"}</>
      ) : (
        <>{pending ? "One moment updating..." : "Update Post"}</>
      )}
    </button>
  );
};
