import httpClient from "~/utils/httpClient";

// sign in
export const signin = async (user) =>
  await httpClient.post("/auth/signin", user);

// sign up
export const signup = async (user) =>
  await httpClient.post("/auth/signup", user);
