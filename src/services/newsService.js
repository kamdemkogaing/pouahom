import { apiFetch } from "./api";

export async function getNews() {
  return apiFetch("/api/news");
}

export async function getNewsById(id) {
  return apiFetch(`/api/news/${id}`);
}
