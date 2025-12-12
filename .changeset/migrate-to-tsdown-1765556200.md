---
'start-ts-by': patch
---

Migrate build tooling from esbuild/rollup to tsdown

- Remove esbuild configuration files (esbuild.build.mjs, esbuild.dev.mjs)
- Remove rollup configuration file (rollup.config.js)
- Remove legacy test framework configs (jest.config.ts, jest.config.e2e.ts)
- Add tsdown configuration file (tsdown.config.ts)
- Convert build plugins from .mjs to .ts (copyFilesPlugin, copyPackageJsonPlugin)
- Update package.json build scripts to use tsdown
- Update tsconfig.build.json to adapt to new build tool
- Remove unnecessary tsconfig files (tsconfig.esbuild.json, tsconfig.rollup.json)
- Update dependencies (remove esbuild, rollup packages, add tsdown)
- Update copyFiles.json to include README.md and LICENSE

