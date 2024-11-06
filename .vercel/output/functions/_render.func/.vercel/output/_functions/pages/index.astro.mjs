/* empty css                                 */
import crypto from 'node:crypto';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderHead, e as renderComponent, f as renderSlot, g as createAstro } from '../chunks/astro/server_DLZpumxH.mjs';
export { renderers } from '../renderers.mjs';

if (!globalThis.crypto) globalThis.crypto = crypto;
if (typeof globalThis.crypto.subtle === "undefined") globalThis.crypto.subtle = crypto.webcrypto.subtle;
if (typeof globalThis.crypto.randomUUID === "undefined") globalThis.crypto.randomUUID = crypto.randomUUID;

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar rounded-box flex w-full gap-2 shadow max-md:flex-col md:items-center"> <div class="flex max-md:w-full items-center justify-between"> <div class="navbar-start items-center justify-between max-md:w-full"> <a class="link text-base-content/90 link-neutral text-xl font-semibold no-underline" href="#">
FlyonUI
</a> <div class="md:hidden"> <button type="button" class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation"> <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span> <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span> </button> </div> </div> </div> <div id="navbar-collapse" class="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"> <ul class="menu md:menu-horizontal gap-2 p-0 text-base"> <li><a href="#">Link 1</a></li> <li><a href="#">Link 2</a></li> <li class="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]"> <button id="dropdown-link" type="button" class="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
Parent
<span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span> </button> <ul class="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-link"> <li><a class="dropdown-item" href="#">Link 3</a></li> <li><a class="dropdown-item" href="#">Link 4</a></li> <li><a class="dropdown-item" href="#">Link 5</a></li> <hr class="border-base-content/25 -mx-2 my-3"> <li><a class="dropdown-item" href="#">Link 6</a></li> </ul> </li> </ul> </div> </nav>`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/noviembre/authvercel/src/components/home/NavBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative h-60 w-full"> <!-- Sticky Footer --> <footer class="footer bg-base-200 absolute -bottom-px start-0 w-full px-6 py-4"> <aside class="grid-flow-col items-center"> <p>©2024 <a class="link link-hover font-medium" href="#">ASTRO</a></p> </aside> <nav class="text-base-content/90 grid-flow-col gap-4 md:place-self-center md:justify-self-end"> <a class="link link-hover" href="#">License</a> <a class="link link-hover" href="#">Help</a> <a class="link link-hover" href="#">Contact</a> <a class="link link-hover" href="#">Policy</a> </nav> </footer> </div>`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/noviembre/authvercel/src/components/home/Footer.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-slate-300 h-screen"> <main class="container mx-auto"> ${renderComponent($$result, "NavBar", $$NavBar, {})} <section class=" bg-slate-400 mt-2 p-4"> ${renderSlot($$result, $$slots["default"])} </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main>  </body> </html>`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/noviembre/authvercel/src/layouts/MainLayout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>INICIO</h1> <ul> <li>instalado auth</li> <li>instalado vercel</li> </ul> ` })}`;
}, "/Users/alegreiff/Documents/desarrollo/ASTRO/noviembre/authvercel/src/pages/index.astro", void 0);

const $$file = "/Users/alegreiff/Documents/desarrollo/ASTRO/noviembre/authvercel/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
