start-ts-by
===

Create typescript project by clone empty typescript templates.


## Get Started start-ts-by

### Local use by npx

```sh
npx start-ts-by
```


---

## Develop start-ts-by

### Install pnpm

- [pnpm.io/zh-TW/installation](https://pnpm.io/zh-TW/installation)

``` sh
corepack enable pnpm

corepack prepare pnpm@10.0.0 --activate
corepack use pnpm@10.0.0

# clean local corepack cache
corepack cache clean


# Cannot find matching keyid: {"signatures":[{"sig":"MEQCIGfJsZcWOYet7N9s+gixdrVR7NuxXRagWTDp3...
# use
npm install --global corepack@latest
```

use `pnpm`
```sh
pnpm -v # 10.0.0
pnpm install --frozen-lockfile
```

### Git commit use commitizen

```sh
# 輸入 git commit 出現 commitizen 選項
git commit

? Select the type of change that you're committing: (Use arrow keys)
❯ feat:     A new feature 
  fix:      A bug fix 
  docs:     Documentation only changes 
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons,
 etc) 
  refactor: A code change that neither fixes a bug nor adds a feature 
  perf:     A code change that improves performance 

```

### Jest

#### unit test

```sh
# src/**.(spec|test).ts
pnpm test
# or
pnpm test:watch 
```

- Unit Test Web Report, port:`9487`
  ```sh
  pnpm test:web
  ```
- Coverage Web Report, port:`9488`
  ```sh
  pnpm test:cov:web
  ```

#### e2e test

```sh
# e2e-spec
pnpm test:e2e
# or
pnpm test:e2e:watch
```

- E2E Test Web Report, port:`9477`
  ```sh
  pnpm test:e2e:web
  ```

---

## Develop environment

### `.npmrc`, `.nvmrc`

### [husky](https://typicode.github.io/husky/get-started.html)

```
pnpm add -wD husky

pnpm exec husky init
```

### Auto commit

- commitlint
- cz-conventional-changelog
- commitizen

```sh
pnpm add -D cz-conventional-changelog @commitlint/cz-commitlint @commitlint/config-conventional @commitlint/cli commitizen
```