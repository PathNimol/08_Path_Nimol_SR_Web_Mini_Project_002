"use client";

import React from "react";
import Link from "next/link";
import { Heart, MoreHorizontal } from "lucide-react";

const WorkspaceItem = ({ workspace, randomColor }) => {
  return (
    <li className="flex items-center space-x-2 hover:bg-gray-100 px-2 py-4 rounded cursor-pointer transition duration-300">
      {/* Random Color Indicator */}
      <span className={`w-2 h-2 rounded-full ${randomColor}`} />

      {/* Workspace Name */}
      <Link
        href={`/workspace/${workspace.workspaceId}`}
        className="text-gray-600 hover:text-gray-800 flex-grow"
      >
        {workspace.workspaceName}
      </Link>

      {/* Favorite Icon */}
      <button
        className={`text-[#F96666] hover:text-[#b65757] ${
          workspace.isFavorite ? "fill-[#F96666]" : ""
        }`}
        onClick={() => console.log("Toggle favorite")}
      >
        <Heart size={24} fill={workspace.isFavorite ? "#F96666" : "none"} />
      </button>

      <button
        className="text-gray-400 hover:text-gray-600 cursor-pointer ml-auto"
        onClick={() => console.log("Show actions menu")}
      >
        <MoreHorizontal size={30} />{" "}
      </button>
    </li>
  );
};

export default WorkspaceItem;
