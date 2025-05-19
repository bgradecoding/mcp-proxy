import { describe, it, expect } from "vitest";
import { startMultiStdioServer, type StartStdioServerOptions } from "./startMultiStdioServer.js";

// simple smoke test that calling startMultiStdioServer resolves

describe("startMultiStdioServer", () => {
  it("starts multiple servers", async () => {
    const options: StartStdioServerOptions[] = [];
    const result = await startMultiStdioServer(options);
    expect(Array.isArray(result)).toBe(true);
  });
});
