import { apiRequest } from "./client.js";

export const recordInteraction = (opportunityId, type) =>
  apiRequest("/interactions", { method: "POST", body: { opportunityId, type } });

export const fetchMyInteractions = (params = {}) => apiRequest("/interactions/mine", { params });

export const removeInteraction = (id) => apiRequest(`/interactions/${id}`, { method: "DELETE" });
