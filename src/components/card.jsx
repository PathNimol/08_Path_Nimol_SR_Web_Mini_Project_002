"use Client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";

export default function CardComponent({ task }) {
  const statusColors = {
    NOT_STARTED: "#F96666", // Red
    IN_PROGRESS: "#4379F2", // Green
    FINISHED: "#009990", // Blue
  };

  const statusColor = statusColors[task?.status] || " ";

  return (
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{task?.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* Task Details */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {task?.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* Tag */}
          <p className="bg-gray-100 text-black py-1.5 px-3 rounded-lg">
            {task?.tag}
          </p>

          {/* Status */}
          <div
            className="rounded-full w-8 h-8"
            style={{ backgroundColor: statusColor }}
          ></div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select>
          <SelectTrigger
            className={`w-36 truncate border-[${statusColor}] text-[${statusColor}]`}
          >
            <SelectValue placeholder={task?.status} />
          </SelectTrigger>
          <SelectContent className="bg-gray-50 border-none">
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* Date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> {task?.endDate}
        </p>
      </div>
    </div>
  );
}
