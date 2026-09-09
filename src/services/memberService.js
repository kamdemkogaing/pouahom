import { apiFetch } from "./api";

export async function getMembers() {
  return apiFetch("/api/members");
}
