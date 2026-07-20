import { apiRequest } from "./client.js";

export const fetchRecommendations = async (limit = 10) => {
  const data = await apiRequest("/recommendations", { params: { limit } });
  return data?.recommendations || [];
};
