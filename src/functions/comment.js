import httpClient from "~/utils/httpClient";

// Queries
export const getComments = async () => await httpClient.get("/comment");

export const getComment = async (commentId) =>
  await httpClient.get(`/comment/${commentId}`);

// Mutations
export const createComment = async (comment, authtoken) =>
  await httpClient.post("/comment", comment, {
    headers: {
      authtoken,
    },
  });

export const updateComment = async (commentId, comment, authtoken) =>
  await httpClient.put(`/comment/${commentId}`, comment, {
    headers: {
      authtoken,
    },
  });

export const removeComment = async (commentId, authtoken) =>
  await httpClient.delete(`/comment/${commentId}`, {
    headers: {
      authtoken,
    },
  });
