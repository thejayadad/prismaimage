import React from "react";

interface DescriptionProps {
  initialData?: {
    description?: string;
  };
  error?: string; // Error message should be a string
}

const DescriptionForm: React.FC<DescriptionProps> = ({ initialData, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        rows={4}
        placeholder="Description..."
        defaultValue={initialData?.description || ""}
        className={`w-full outline-none border border-gray-300 rounded-md p-2 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default DescriptionForm;
