import { apiFetch } from "./api";

export async function getMeetings() {
  return apiFetch("/api/meetings");
}
