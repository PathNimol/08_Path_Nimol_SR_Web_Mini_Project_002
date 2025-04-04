import headerToken from "@/app/api/headerToken";

export const getAllTaskByWorkspaceIdService = async (id) => {
  try {
    const header = await headerToken();
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
