---
"start-ts-by": minor
---

feat(registry): implement Registry support with template management and list command

**New Features:**
- Add Registry core functionality for centralized template management
- Implement `--list` command with multiple display modes (normal/JSON/verbose)
- Support hierarchical template selection and navigation
- Add comprehensive bilingual documentation (English/繁體中文)

**Technical Improvements:**
- Add complete registry type definitions (RegistryTemplate, Registry, RegistryConfig)
- Enhance type safety by removing `any` type usage in createAction.ts
- Implement registry config caching mechanism for better performance
- Add comprehensive test suite with 143 tests (86.23% coverage)
- Add 90+ registry module tests and 20+ list command tests

**Core Modules:**
- Registry validator, loader, config, and resolver
- Template selection flow integration
- Hierarchical template navigation interface

**Documentation:**
- Technical design and implementation summary
- Bilingual Registry documentation (registry.md / registry.zh-TW.md)
- Updated README with Registry usage examples

**Build Process:**
- Update build configuration to include registry-config.json

This is a fully backward compatible update with no breaking changes.
