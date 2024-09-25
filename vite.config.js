import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	// Load env file based on `mode` (development, production, etc.)
	const env = loadEnv(mode, process.cwd());

	return {
		define: {
			'process.env.POLYGON_API_KEY': JSON.stringify(env.POLYGON_API_KEY),
		},
	};
});
