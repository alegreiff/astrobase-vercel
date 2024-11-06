import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D8EAF6NB.mjs';
import { manifest } from './manifest_D2qeCm4y.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/_---auth_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.10_rollup@4.24.4_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/auth-astro@4.1.2_@auth+core@0.32.0_astro@4.16.10_rollup@4.24.4_typescript@5.6.3__next@15.0.2__dsgkw4guhso5s3tbh4briamqha/node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/index.astro", _page2]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "877ef72e-4f13-46d5-97b5-e4c635bb43fc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
