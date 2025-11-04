import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // If you host on GitHub Pages under a repo, set base: "/<repo-name>/"
  // base: "/dhruvijoshi/"
});
