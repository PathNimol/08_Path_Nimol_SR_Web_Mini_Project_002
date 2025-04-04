import React from "react";
import { getAllWorkspaceService } from "../../../../service/workspace.service";
import Logo from "../../../../components/logo";
import LogoutButton from "../../../../components/LogoutButton";
import { PlusIcon } from "lucide-react";
import WorkspaceItem from "../../../../components/WorkspaceItem";

const SidebarComponent = async () => {
  const { payload: workspaces } = await getAllWorkspaceService();

  // Define colors array
  const colors = ["bg-[#F96666]", "bg-[#009990]", "bg-[#4379F2]"];

  const safeWorkspaces = Array.isArray(workspaces) ? workspaces : [];
  const favoriteWorkspaces = safeWorkspaces.filter((ws) => ws.isFavorite);

  return (
    <aside className="bg-white w-96 p-4 shadow-md min-h-screen">
      {/* Header */}
      <Logo />

      {/* Workspace Section */}
      <div>
        <div className="mt-8 flex items-center justify-between mb-4">
          <h3 className="text-gray-600 text-lg font-medium">Workspace</h3>
          <button
            type="button"
            className="text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg p-1.5 transition duration-300 dark:border-gray-500 dark:text-gray-500 dark:hover:text-blue-950 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            <PlusIcon size={16} />
          </button>
        </div>

        <ul className="space-y-2">
          {safeWorkspaces.length > 0 ? (
            safeWorkspaces.map((workspace, index) => {
              // Pick a random color for each workspace
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
              return (
                <WorkspaceItem
                  key={index}
                  workspace={workspace}
                  randomColor={randomColor}
                />
              );
            })
          ) : (
            <li className="text-gray-600 text-sm">No workspaces available</li>
          )}
        </ul>
      </div>

      {/* Favorite Section */}
      <div className="mt-8">
        <h3 className="text-gray-600 text-lg mb-4">Favorite</h3>
        <ul className="space-y-2">
          {favoriteWorkspaces.length > 0 ? (
            favoriteWorkspaces.map((workspace, index) => {
              // Pick a random color for each favorite workspace
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
              return (
                <WorkspaceItem
                  key={index}
                  workspace={workspace}
                  randomColor={randomColor}
                />
              );
            })
          ) : (
            <li className="text-gray-600 text-sm">No favorite workspaces</li>
          )}
        </ul>
      </div>

      {/* Logout Button */}
      <div className="mt-8">
        <LogoutButton />
      </div>
    </aside>
  );
};

export default SidebarComponent;
