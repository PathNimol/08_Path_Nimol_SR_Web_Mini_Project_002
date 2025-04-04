// components/Content.js
"use client"; // Mark this as a Client Component

import CardComponent from "../../../../components/card";
import { Button } from "../../../../components/ui/button";
import { Heart, Plus } from "lucide-react";
import React, { useState } from "react";
import { postTask } from "../../../../service/task.service";

const Content = ({ payload }) => {
  const safePayload = Array.isArray(payload) ? payload : [];

  // Group tasks by status
  const notStartedTasks =
    safePayload.filter((task) => task.status === "NOT_STARTED") || [];
  const inProgressTasks =
    safePayload.filter((task) => task.status === "IN_PROGRESS") || [];
  const finishedTasks =
    safePayload.filter((task) => task.status === "FINISHED") || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    workspaceId: "",
    taskTitle: "",
    taskDetail: "",
    tag: "DESIGN",
    endDate: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare task data
      const taskData = {
        taskTitle: formData.taskTitle,
        taskDetail: formData.taskDetail,
        tag: formData.tag,
        endDate: formData.endDate,
        status: "NOT_STARTED", // Default status for a new task
      };

      // Call the API function
      const response = await postTask(formData.workspaceId, taskData);

      console.log("jkndfsskjssddjnsnkn", response);

      if (response) {
        console.log("Task successfully posted:", response);
        // Optionally, update state to reflect the new task
      } else {
        console.error("Failed to post task");
      }
    } catch (error) {
      console.error("Error posting task:", error);
    }

    // Reset form and close modal
    setFormData({
      workspaceId: "",
      taskTitle: "",
      taskDetail: "",
      tag: "DESIGN",
      endDate: "",
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="flex-grow p-4">
        <div className="mb-4">
          <h2 className="flex items-center justify-between text-sm font-medium text-gray-500">
            Workspace
            <button
              type="button"
              className="text-gray-700 hover:text-[#F96666] transition duration-300 dark:text-gray-500"
            >
              <Heart size={24} />
            </button>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Not Started Section */}
          <div className="w-full">
            <h2 className="mb-2 text-[22px] font-bold text-[#F96666] font-sans">
              Not Started
            </h2>
            <hr className="bg-[#F96666] h-1 border-0" />
            {notStartedTasks.length > 0 ? (
              <div className="space-y-2 overflow-y-auto max-h-[700px] hide-scrollbar">
                {notStartedTasks.map((task, index) => (
                  <CardComponent key={index} task={task} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No tasks available</p>
            )}
          </div>

          {/* In Progress Section */}
          <div className="w-full">
            <h2 className="mb-2 text-[22px] font-bold text-[#4379F2]">
              In Progress
            </h2>
            <hr className="bg-[#4379F2] h-1 border-0" />
            {inProgressTasks.length > 0 ? (
              <div className="space-y-2 overflow-y-auto max-h-[700px] hide-scrollbar">
                {inProgressTasks.map((task, index) => (
                  <CardComponent key={index} task={task} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No tasks available</p>
            )}
          </div>

          {/* Finished Section */}
          <div className="w-full">
            <h2 className="mb-2 text-[22px] font-bold text-[#009990]">
              Finished
            </h2>
            <hr className="bg-[#009990] h-1 border-0" />
            {finishedTasks.length > 0 ? (
              <div className="space-y-2 overflow-y-auto max-h-[700px] hide-scrollbar">
                {finishedTasks.map((task, index) => (
                  <CardComponent key={index} task={task} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No tasks available</p>
            )}
          </div>
        </div>
      </main>

      {/* Fixed Add New Task Button */}
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={() => setIsModalOpen(true)} // Open modal on click
          className="flex items-center space-x-2 bg-[#009990] hover:bg-[#007d70] text-white px-4 py-2 rounded-lg shadow-md"
        >
          <Plus size={20} /> {/* Plus Icon */}
          <span>Add New Task</span>
        </Button>
      </div>

      {/* Modal for Adding a New Task */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-2 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit}>
              {/* Workspace ID */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Workspace ID
                </label>
                <input
                  type="text"
                  name="workspaceId"
                  value={formData.workspaceId}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Task Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Task Title
                </label>
                <input
                  type="text"
                  name="taskTitle"
                  value={formData.taskTitle}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Task Detail */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Task Detail
                </label>
                <textarea
                  name="taskDetail"
                  value={formData.taskDetail}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>

              {/* Tag */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Tag
                </label>
                <input
                  type="text"
                  name="tag"
                  value={formData.tag}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* End Date */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(false)} // Close modal
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#009990] hover:bg-[#007d70] text-white px-4 py-2 rounded-lg"
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
