// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				nested: resolve(__dirname, "nested/src/pages/cart.html"),
				// nested: resolve(__dirname, "nested/src/pages/detailproduct.html"),
				// nested: resolve(__dirname, "nested/src/pages/home.html"),
				// nested: resolve(__dirname, "nested/src/pages/pay.html"),
				// nested: resolve(__dirname, "nested/src/pages/products.html"),
				// nested: resolve(__dirname, "nested/src/pages/signin.html"),
				// nested: resolve(__dirname, "nested/src/pages/signup.html"),
			},
		},
	},
});
