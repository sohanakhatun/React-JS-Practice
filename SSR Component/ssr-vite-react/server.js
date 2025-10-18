// server.js
import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";

// This is only for development environment. 
async function createServer() {
  const app = express();

  // 1) create vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: "ssr" },
    appType: "custom",
  });

  // 2) use vite's middleware
  app.use(vite.middlewares);

  // 3) handle GET request
  app.use("/", async (req, res) => {
    const url = req.originalUrl;

    try {
      // read index.html
      let template = fs.readFileSync(path.resolve("index.html"), "utf-8");

      // let Vite transform the index.html (inject HMR, etc.)
      template = await vite.transformIndexHtml(url, template);

      // load server entry. vite.ssrLoadModule will transform ES modules on the fly.
      const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

      // render app HTML
      const appHtml = render(url);

      const html = template.replace("<!--ssr-outlet-->", appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Dev server running: http://localhost:${port}`);
  });
}

createServer();
