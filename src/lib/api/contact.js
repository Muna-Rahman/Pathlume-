import { apiRequest } from "./client.js";

export const submitContactMessage = (payload) =>
  apiRequest("/contact", { method: "POST", body: payload });
