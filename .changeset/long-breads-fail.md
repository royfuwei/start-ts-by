---
"start-ts-by": minor
---

BREAKING CHANGE: Migrate version management from standard-version to Changesets

- Remove standard-version configuration file (.versionrc)
- Remove standard-version related scripts from package.json
- Add @changesets/cli as the new version management tool
- Add .changeset/config.json configuration file
- Update GitHub Actions workflows to support Changesets
- Update release process to use `changeset version` and `changeset publish`

This change affects the project's version release workflow. Developers need to use the new Changesets workflow to manage version changes.
