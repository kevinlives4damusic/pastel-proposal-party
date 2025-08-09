import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base for GitHub Pages project site (https://<user>.github.io/pastel-proposal-party/)
  base: "/pastel-proposal-party/",
  server: {
    // Bind to all interfaces (IPv4/IPv6) for better Windows compatibility
    host: true,
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
