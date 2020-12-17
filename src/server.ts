import express from "express";
import makeRoutes from "./routes";

const makeServer = () => {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json());

  const router = express.Router();
  const routes = makeRoutes(router);
  app.use("/", routes);

  return app;
};

export default makeServer;
