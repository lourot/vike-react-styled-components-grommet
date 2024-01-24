import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";
import Head from "../layouts/HeadDefault";
import logoUrl from "../assets/logo.svg";
import vikeReact from "vike-react/config";

import { onRenderHtml } from "../renderer/onRenderHtml";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "My Vike App",
  // <link rel="icon" href="${favicon}" />
  favicon: logoUrl,
  onRenderHtml,
  extends: vikeReact,
} satisfies Config;
