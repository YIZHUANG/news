import express, { Request, Response } from "express";
import next from "next";

import appRoutes from "../routes";

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./src" });
const handle = appRoutes.getRequestHandler(app);

function createServer() {
  const server = express()
  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  return server;
}

const server = createServer();

app.prepare().then(() => {
  console.log(`Starting app at port ${port}`);
  server.listen(port);
});
