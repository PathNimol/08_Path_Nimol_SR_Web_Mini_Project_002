"use client"; // Mark this as a Client Component

import { useRouter } from "next/navigation"; // For redirecting after logout
import { LogOut } from "lucide-react"; // Import the LogOut icon
import { signOut } from "next-auth/react"; // Import signOut from next-auth/react

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Clear the token from localStorage (if used)
      localStorage.removeItem("authToken");

      // Use NextAuth's signOut to clear the session token cookie
      await signOut({ callbackUrl: "/login" });

      // Optionally, log the remaining localStorage items to confirm the token is removed
      console.log("Remaining localStorage items:", { ...localStorage });
    } catch (error) {
      console.error("Failed to log out:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return (
    <div className="mt-8">
      <button
        className="text-[#009990] hover:text-[#346d69] flex items-center space-x-2"
        onClick={handleLogout}
      >
        {/* LogOut Icon */}
        <LogOut className="font-extrabold" size={30} />{" "}
        {/* Adjust size as needed */}
        {/* Logout Text */}
        <span className="font-bold text-2xl">Logout</span>
      </button>
    </div>
  );
};

export default LogoutButton;
