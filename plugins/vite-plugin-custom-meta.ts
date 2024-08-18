import type { IndexHtmlTransformResult, PluginOption } from "vite";

type CustomMetaHook = {
  meta: {
    title: string;
    keyword: string;
  };
};

export default function vitePluginCustomMeta({
  meta,
}: CustomMetaHook): PluginOption {
  return {
    // 插件名称
    name: "vite-plugin-custom-meta",

    // pre 会较于 post 先执行
    enforce: "post", // post

    // 指明它们仅在 'build' 或 'serve' 模式时调用
    apply: "build", // apply 亦可以是一个函数

    config(config, { command }) {
      console.log("这里是config钩子");
    },

    configResolved(resolvedConfig) {
      console.log("这里是configResolved钩子");
    },

    configureServer(server) {
      console.log("这里是configureServer钩子");
    },

    transformIndexHtml(html) {
      console.log("这里是transformIndexHtml钩子", html);
      const metaTags = Object.keys(meta)
        .map((key) => {
          return `<meta name="${key}" content="${meta[key]}" />`;
        })
        .join("\n");
      return html.replace("</head>", metaTags + "\n" + "</head>");
    },
  };
}
