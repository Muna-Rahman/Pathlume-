import { apiRequest } from "./client.js";

export const fetchMyEmployerProfile = async () => {
  const data = await apiRequest("/employer-profile/me");
  return data?.profile;
};

export const updateMyEmployerProfile = async (payload) => {
  const data = await apiRequest("/employer-profile/me", { method: "PUT", body: payload });
  return data?.profile;
};
