import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath , pathToFileURL } from "url"; // important for ESM

// Resolve __dirname manually (not available in ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 1️. serve built static assets
app.use(
  "/assets",
  express.static(path.resolve(__dirname, "dist/client/assets"), { maxAge: "1y" })
);

// 2️. read prebuilt HTML template
const template = fs.readFileSync(
  path.resolve(__dirname, "dist/client/index.html"),
  "utf-8"
);

// 3️. import SSR entry from dist/server (use file:// URL for ESM import)
const { render } = await import(
  pathToFileURL(path.resolve(__dirname, "dist/server/entry-server.js")).href
);

// 4️. render each request
app.get("/", (req, res) => {
  const url = req.originalUrl;
  const appHtml = render(url);
  const html = template.replace(`<!--ssr-outlet-->`, appHtml);
  res.status(200).set({ "Content-Type": "text/html" }).end(html);
});

// 5️. start server
app.listen(3000, () =>
  console.log("✅ Production SSR running at http://localhost:3000")
);
