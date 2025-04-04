import headerToken from "@/app/api/headerToken";

//Get All workspace
export const getAllWorkspaceService = async () => {
  const header = await headerToken();
  try {
    const workspaceList = await fetch(
      `${process.env.NEXTAUTH_URL}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
      {
        headers: header,
      }
    );
    const data = await workspaceList.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

//Get workspace by id
export const getWorkspaceById = async (workspaceId) => {
  const header = await headerToken();

  try {
    const workspaceById = await fetch(
      `${process.env.NEXTAUTH_URL}/workspace/${workspaceId}`,
      {
        method: "GET",
        headers: header,
      }
    );

    const data = await workspaceById.json();
    return data;
  } catch (e) {
    console.error("Error fetching workspace by ID: ", e);
  }
};

//Update Workspace by ID
export const updateWorkspaceById = async (workspaceId, workspaceData) => {
  const header = await headerToken();

  try {
    const updateById = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/workspace/${workspaceId}`,
      {
        method: "PUT", // Use PUT for updating
        headers: {
          ...header,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workspaceData),
      }
    );

    const data = await updateById.json();
    return data;
  } catch (error) {
    console.error("Error updating workspace: ", error);
  }
};

//Post Workspace
export const postWorkspace = async (workspaceData) => {
  const token = await headerToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/workspace`, {
      method: "POST",
      headers: {
        ...token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workspaceData),
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error posting workspace:", e);
  }
};

// service/workspace.service.js
// export const toggleFavoriteService = async (workspaceId, isFavorite) => {
//   const response = await fetch(`/api/workspaces/${workspaceId}/favorite`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ isFavorite }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to toggle favorite");
//   }

//   return response.json();
// };
