"use client";

import React from "react";
import theme from "../../../styles/theme";

interface TagDisplayProps {
  tags: string[];
}

const TagDisplay: React.FC<TagDisplayProps> = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag, index) => (
        <div
          key={`tag-display-${index}`}
          className="bg-gray-50 text-gray-800 px-4 py-1.5 rounded-full text-base"
          style={{
            backgroundColor: theme.colors.gray[50],
            color: theme.colors.gray[800],
          }}
        >
          #{tag}
        </div>
      ))}
    </div>
  );
};

export default TagDisplay;
