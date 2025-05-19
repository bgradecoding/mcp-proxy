import { startMultiStdioServer } from "./startMultiStdioServer.js";

await startMultiStdioServer(JSON.parse(process.argv[2]));
