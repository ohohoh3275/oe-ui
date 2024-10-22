import { defineConfig } from "vitest/config";

export default defineConfig({
    esbuild: {
        include: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ts", "**/*.tsx"],
    },
    test: {
        coverage: {
            provider: "v8",
            ignoreEmptyLines: true,
        },
    },
});
