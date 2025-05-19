import { SSEClientTransport, SSEClientTransportOptions } from "@modelcontextprotocol/sdk/client/sse.js";

/**
 * Create an SSE client transport that always sends the provided `x-user-id`
 * header when establishing the SSE connection and when POSTing messages.
 */
export const createAuthenticatedSSEClientTransport = (
  url: URL,
  userId: string,
  options: SSEClientTransportOptions = {},
): SSEClientTransport => {
  const headers = { "x-user-id": userId };
  return new SSEClientTransport(url, {
    ...options,
    eventSourceInit: {
      ...(options.eventSourceInit ?? {}),
      headers: { ...(options.eventSourceInit?.headers ?? {}), ...headers },
    },
    requestInit: {
      ...(options.requestInit ?? {}),
      headers: { ...(options.requestInit?.headers ?? {}), ...headers },
    },
  });
};
