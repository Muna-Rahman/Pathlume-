import { API_BASE_URL, ApiClientError } from "./client.js";

/**
 * Multipart upload doesn't fit the shared JSON `apiRequest` helper
 * (different Content-Type, FormData body), so this makes its own
 * fetch call while keeping the same error-normalization contract.
 */
export const uploadResume = async (file, { opportunityId } = {}) => {
  const formData = new FormData();
  formData.append("resume", file);
  if (opportunityId) formData.append("opportunityId", opportunityId);

  const response = await fetch(`${API_BASE_URL}/resume-analysis`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new ApiClientError(payload?.message || "Could not analyze this resume.", response.status, payload?.details);
  }
  return payload?.data?.analysis;
};

export const fetchResumeHistory = async (params = {}) => {
  const url = new URL(`${API_BASE_URL}/resume-analysis`);
  Object.entries(params).forEach(([k, v]) => v && url.searchParams.set(k, v));

  const response = await fetch(url.toString(), { credentials: "include" });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new ApiClientError(payload?.message || "Could not load your resume history.", response.status);
  }
  return payload?.data?.history || [];
};

export const fetchResumeAnalysis = async (id) => {
  const response = await fetch(`${API_BASE_URL}/resume-analysis/${id}`, { credentials: "include" });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new ApiClientError(payload?.message || "Could not load this analysis.", response.status);
  }
  return payload?.data?.analysis;
};

/** Direct-navigation download link - the browser sends the session cookie automatically. */
export const buildReportDownloadUrl = (id) => `${API_BASE_URL}/resume-analysis/${id}/report`;
