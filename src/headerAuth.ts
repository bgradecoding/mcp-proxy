import http from "http";

/**
 * Returns an authenticator that checks the `x-user-id` header against the
 * provided `userId` value.
 */
export const createHeaderAuth = (userId: string) => {
  return (req: http.IncomingMessage): boolean => {
    const value = Array.isArray(req.headers["x-user-id"])
      ? req.headers["x-user-id"][0]
      : req.headers["x-user-id"];

    return value === userId;
  };
};

/** Default user id for {@link headerAuth}. */
export const AUTH_USER_ID = "user123";

/**
 * Authentication helper that validates requests using {@link AUTH_USER_ID}.
 */
export const headerAuth = createHeaderAuth(AUTH_USER_ID);
