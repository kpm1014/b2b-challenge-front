import httpClient from "~/utils/httpClient";

// Queries
export const getPosts = async () => await httpClient.get("/post");

export const getPost = async (postId) =>
  await httpClient.get(`/post/${postId}`);

// Mutations
export const createPost = async (post, authtoken) =>
  await httpClient.post("/post", post, {
    headers: {
      authtoken,
    },
  });

export const updatePost = async (postId, post, authtoken) =>
  await httpClient.put(`/post/${postId}`, post, {
    headers: {
      authtoken,
    },
  });

export const removePost = async (postId, authtoken) =>
  await httpClient.delete(`/post/${postId}`, {
    headers: {
      authtoken,
    },
  });
