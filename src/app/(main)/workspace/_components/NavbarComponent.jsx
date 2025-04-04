import { getUser } from "../../../../../service/user.service";
import { getWorkspaceById } from "../../../../../service/workspace.service";

const Navbar = async () => {
  const { payload: users } = await getUser();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Workspace Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <p className="text-gray-600 text-sm">Workspace</p>
          <span className="text-blue-500 font-medium">DEFAULT</span>
          <span className="text-gray-400"></span>
        </div>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="focus:outline-none"></button>

        {/* Settings Icon */}

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pinimg.com/736x/e2/81/8a/e2818a6e9989c213a62f3659e9313d3d.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          {users ? (
            <div>
              <p className="text-gray-600 text-sm">{users.username}</p>
              <p className="text-xs text-gray-400">{users.email}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
