import { apiRequest } from "./client.js";

export const fetchMyProfile = async () => {
  const data = await apiRequest("/profile/me");
  return data?.profile;
};

export const updateMyProfile = async (payload) => {
  const data = await apiRequest("/profile/me", { method: "PUT", body: payload });
  return data?.profile;
};
