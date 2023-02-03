import { mande } from "mande";

export const api = mande("https://jsonplaceholder.typicode.com", {
  headers: { "Content-Type": "application/json" },
});
