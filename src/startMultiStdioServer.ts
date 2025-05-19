import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { startStdioServer, ServerType } from "./startStdioServer.js";

export type StartStdioServerOptions = Parameters<typeof startStdioServer>[0];

export const startMultiStdioServer = async (
  configs: StartStdioServerOptions[],
): Promise<Server[]> => {
  const servers: Server[] = [];

  for (const cfg of configs) {
    const server = await startStdioServer(cfg);
    servers.push(server);
  }

  return servers;
};
