// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "./pages/index.html"),
				pay: resolve(__dirname, "./pages/pay.html"),
			},
		},
	},
});
