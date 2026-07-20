import { apiRequest } from "./client.js";

export const fetchOpportunities = (filters = {}) =>
  apiRequest("/opportunities", { params: filters });

export const fetchOpportunityById = (id) => apiRequest(`/opportunities/${id}`);

export const fetchRelatedOpportunities = (id, limit = 4) =>
  apiRequest(`/opportunities/${id}/related`, { params: { limit } });

export const fetchMyOpportunities = (filters = {}) =>
  apiRequest("/opportunities/mine", { params: filters });

export const createOpportunity = (payload) =>
  apiRequest("/opportunities", { method: "POST", body: payload });

export const updateOpportunity = (id, payload) =>
  apiRequest(`/opportunities/${id}`, { method: "PUT", body: payload });

export const deleteOpportunity = (id) =>
  apiRequest(`/opportunities/${id}`, { method: "DELETE" });
