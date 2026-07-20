import { apiRequest } from "./client.js";

export const fetchReviews = (opportunityId, params = {}) =>
  apiRequest(`/opportunities/${opportunityId}/reviews`, { params });

export const createReview = (opportunityId, payload) =>
  apiRequest(`/opportunities/${opportunityId}/reviews`, { method: "POST", body: payload });

export const deleteReview = (reviewId) => apiRequest(`/reviews/${reviewId}`, { method: "DELETE" });
