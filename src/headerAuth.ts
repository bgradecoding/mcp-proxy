import http from "http";

export const createHeaderAuth = (userId: string) => {
  return (req: http.IncomingMessage): boolean => {
    const value = Array.isArray(req.headers["x-user-id"])
      ? req.headers["x-user-id"][0]
      : req.headers["x-user-id"];
    return value === userId;
  };
};

export const AUTH_USER_ID = "user123";

export const headerAuth = createHeaderAuth(AUTH_USER_ID);
