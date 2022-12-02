import httpClient from "~/utils/httpClient";

// Queries
export const getUsers = async () => await httpClient.get("/user");

export const getUser = async (userId) =>
  await httpClient.get(`/user/${userId}`);

// Mutations
export const createUser = async (user, authtoken) =>
  await httpClient.post("/user", user, {
    headers: {
      authtoken,
    },
  });

export const updateUser = async (userId, user, authtoken) =>
  await httpClient.put(`/user/${userId}`, user, {
    headers: {
      authtoken,
    },
  });

export const removeUser = async (userId, authtoken) =>
  await httpClient.delete(`/user/${userId}`, {
    headers: {
      authtoken,
    },
  });
