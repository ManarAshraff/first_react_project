# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.2.5](https://github.com/inspect-js/is-callable/compare/v1.2.4...v1.2.5) - 2022-09-11

### Commits

- [actions] reuse common workflows [`5bb4b32`](https://github.com/inspect-js/is-callable/commit/5bb4b32dc93987328ab4f396601f751c4a7abd62)
- [meta] better `eccheck` command [`b9bd597`](https://github.com/inspect-js/is-callable/commit/b9bd597322b6e3a24c74c09881ca73e1d9f9f485)
- [meta] use `npmignore` to autogenerate an npmignore file [`3192d38`](https://github.com/inspect-js/is-callable/commit/3192d38527c7fc461d05d5aa93d47628e658bc45)
- [Fix] for HTML constructors, always use `tryFunctionObject` even in pre-toStringTag browsers [`3076ea2`](https://github.com/inspect-js/is-callable/commit/3076ea21d1f6ecc1cb711dcf1da08f257892c72b)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `available-typed-arrays`, `object-inspect`, `safe-publish-latest`, `tape` [`8986746`](https://github.com/inspect-js/is-callable/commit/89867464c42adc5cd375ee074a4574b0295442cb)
- [meta] add `auto-changelog` [`7dda9d0`](https://github.com/inspect-js/is-callable/commit/7dda9d04e670a69ae566c8fa596da4ff4371e615)
- [Fix] properly report `document.all` [`da90b2b`](https://github.com/inspect-js/is-callable/commit/da90b2b68dc4f33702c2e01ad07b4f89bcb60984)
- [actions] update codecov uploader [`c8f847c`](https://github.com/inspect-js/is-callable/commit/c8f847c90e04e54ff73c7cfae86e96e94990e324)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `object-inspect`, `tape` [`899ae00`](https://github.com/inspect-js/is-callable/commit/899ae00b6abd10d81fc8bc7f02b345fd885d5f56)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `es-value-fixtures`, `object-inspect`, `tape` [`344e913`](https://github.com/inspect-js/is-callable/commit/344e913b149609bf741aa7345fa32dc0b90d8893)
- [meta] remove greenkeeper config [`737dce5`](https://github.com/inspect-js/is-callable/commit/737dce5590b1abb16183a63cb9d7d26920b3b394)
- [meta] npmignore coverage output [`680a883`](https://github.com/inspect-js/is-callable/commit/680a8839071bf36a419fe66e1ced7a3303c27b28)

<!-- auto-changelog-above -->
1.2.4 / 2021-08-05
=================
  * [Fix] use `has-tostringtag` approach to behave correctly in the presence of symbol shams
  * [readme] fix repo URLs
  * [readme] add actions and codecov badges
  * [readme] remove defunct badges
  * [meta] ignore eclint checking coverage output
  * [meta] use `prepublishOnly` script for npm 7+
  * [actions] use `node/install` instead of `node/run`; use `codecov` action
  * [actions] remove unused workflow file
  * [Tests] run `nyc` on all tests; use `tape` runner
  * [Tests] use `available-typed-arrays`, `for-each`, `has-symbols`, `object-inspect`
  * [Dev Deps] update `available-typed-arrays`, `eslint`, `@ljharb/eslint-config`, `aud`, `object-inspect`, `tape`

1.2.3 / 2021-01-31
=================
  * [Fix] `document.all` is callable (do not use `document.all`!)
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `tape`
  * [Tests] migrate tests to Github Actions
  * [actions] add "Allow Edits" workflow
  * [actions] switch Automatic Rebase workflow to `pull_request_target` event

1.2.2 / 2020-09-21
=================
  * [Fix] include actual fix from 579179e
  * [Dev Deps] update `eslint`

1.2.1 / 2020-09-09
=================
  * [Fix] phantomjs??? Reflect.apply does not throw properly on a bad array-like
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`
  * [meta] fix eclint error

1.2.0 / 2020-06-02
=================
  * [New] use??`Reflect.apply`???based callability??detection
  * [readme] add install instructions (#55)
  * [meta] only run `aud` on prod deps
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`, `make-arrow-function`, `make-generator-function`; add `aud`, `safe-publish-latest`, `make-async-function`
  * [Tests] add??tests for??function??proxies (#53, #25)

1.1.5 / 2019-12-18
=================
  * [meta] remove unused Makefile and associated utilities
  * [meta] add `funding` field; add FUNDING.yml
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `semver`, `tape`, `covert`, `rimraf`
  * [Tests] use shared travis configs
  * [Tests] use `eccheck` over `editorconfig-tools`
  * [Tests] use `npx aud` instead of `nsp` or `npm audit` with hoops
  * [Tests] remove `jscs`
  * [actions] add automatic rebasing / merge commit blocking

1.1.4 / 2018-07-02
=================
  * [Fix] improve `class` and arrow function detection (#30, #31)
  * [Tests] on all latest node minors; improve matrix
  * [Dev Deps] update all dev deps

1.1.3 / 2016-02-27
=================
  * [Fix] ensure ???class ??? doesn???t screw up ???class??? detection
  * [Tests] up to `node` `v5.7`, `v4.3`
  * [Dev Deps] update to `eslint` v2, `@ljharb/eslint-config`, `jscs`

1.1.2 / 2016-01-15
=================
  * [Fix] Make sure comments don???t screw up ???class??? detection (#4)
  * [Tests] up to `node` `v5.3`
  * [Tests] Add `parallelshell`, run both `--es-staging` and stock tests at once
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`
  * [Refactor] convert `isNonES6ClassFn` into `isES6ClassFn`

1.1.1 / 2015-11-30
=================
  * [Fix] do not throw when a non-function has a function in its [[Prototype]] (#2)
  * [Dev Deps] update `tape`, `eslint`, `@ljharb/eslint-config`, `jscs`, `nsp`, `semver`
  * [Tests] up to `node` `v5.1`
  * [Tests] no longer allow node 0.8 to fail.
  * [Tests] fix npm upgrades in older nodes

1.1.0 / 2015-10-02
=================
  * [Fix] Some browsers report TypedArray constructors as `typeof object`
  * [New] return false for "class" constructors, when possible.
  * [Tests] up to `io.js` `v3.3`, `node` `v4.1`
  * [Dev Deps] update `eslint`, `editorconfig-tools`, `nsp`, `tape`, `semver`, `jscs`, `covert`, `make-arrow-function`
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG

1.0.4 / 2015-01-30
=================
  * If @@toStringTag is not present, use the old-school Object#toString test.

1.0.3 / 2015-01-29
=================
  * Add tests to ensure arrow functions are callable.
  * Refactor to aid optimization of non-try/catch code.

1.0.2 / 2015-01-29
=================
  * Fix broken package.json

1.0.1 / 2015-01-29
=================
  * Add early exit for typeof not "function"

1.0.0 / 2015-01-29
=================
  * Initial release.
