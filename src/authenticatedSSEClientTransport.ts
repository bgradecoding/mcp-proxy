import {
  SSEClientTransport,
  SSEClientTransportOptions,
} from "@modelcontextprotocol/sdk/client/sse.js";

export const AUTH_USER_ID = "user123";

/**
 * Create an SSE client transport that always sends the provided `x-user-id`
 * header when establishing the SSE connection and when POSTing messages.
 */
export const createAuthenticatedSSEClientTransport = (
  url: URL,
  userId: string,
  options: SSEClientTransportOptions = {}
): SSEClientTransport => {
  return new SSEClientTransport(url, {
    ...options,
    eventSourceInit: {
      ...(options.eventSourceInit ?? {}),
    },
    requestInit: {
      ...(options.requestInit ?? {}),
      headers: {
        ...(options.requestInit?.headers ?? {}),
        "X-User-Id": userId,
      },
    },
  });
};
