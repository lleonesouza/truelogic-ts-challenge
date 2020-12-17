import { Router } from "express";
import controllers from "./controllers";

const { calculateSum } = controllers;

const makeRoutes = (router: Router) => {

  router.post("/add", calculateSum);

  return router;
};

export default makeRoutes;
