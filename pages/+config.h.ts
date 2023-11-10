import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";
import Head from "../layouts/HeadDefault";
import logoUrl from "../assets/logo.svg";
import vikeReact from "vike-react";

import { onRenderHtml } from "../renderer/onRenderHtml";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "My Vike App",
  // <meta name="description">
  description: "Demo showcasing Vike",
  // <link rel="icon" href="${favicon}" />
  favicon: logoUrl,
  onRenderHtml,
  extends: vikeReact,
} satisfies Config;
