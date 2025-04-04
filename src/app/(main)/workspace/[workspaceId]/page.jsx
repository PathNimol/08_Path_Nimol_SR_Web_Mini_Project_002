// pages/workspace/[workspaceId].js

import { getAllTaskByWorkspaceIdService } from "../../../../../service/task.service";
import Content from "../_components/ContainComponent";

export default async function WorkspacePage({ params }) {
  const workspaceId = await params.workspaceId;

  // Fetch tasks for the workspace
  const { payload } = await getAllTaskByWorkspaceIdService(workspaceId);
  console.log("response", payload);

  return (
    <div>
      {/* Pass the payload to the Content component */}
      <Content payload={payload} />
    </div>
  );
}
