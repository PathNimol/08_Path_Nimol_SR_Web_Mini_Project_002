import headerToken from "../../src/app/api/headerToken";

export const getAllTaskByWorkspaceIdService = async (id) => {
  const header = await headerToken();
  try {
    const allTasks = await fetch(
      `${process.env.NEXTAUTH_URL}/tasks/workspace/${id}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
      {
        method: "GET",
        headers: header,
      }
    );
    const data = await allTasks.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postTask = async (wordspaceId, taskData) => {
  const header = await headerToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/workspace/${wordspaceId}?`,
      {
        method: "POST",
        headers: header,
        body: JSON.stringify(taskData),
      }
    );

    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error posting task:", e);
  }
};
