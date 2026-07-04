import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * Feature-Sliced Design layer hierarchy (top → bottom).
 * A layer may only import from layers strictly below it.
 */
const FSD_LAYERS = ["app", "views", "widgets", "features", "entities", "shared"];

const fsdBoundaryRules = FSD_LAYERS.map((layer, index) => {
  const higherLayers = FSD_LAYERS.slice(0, index);
  if (higherLayers.length === 0) return null;
  return {
    files: [`src/${layer}/**/*.{ts,tsx}`],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: higherLayers.map((higher) => ({
            group: [`@/${higher}/*`, `@/${higher}`],
            message: `FSD violation: "${layer}" must not import from higher layer "${higher}".`,
          })),
        },
      ],
    },
  };
}).filter((entry) => entry !== null);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...fsdBoundaryRules,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
