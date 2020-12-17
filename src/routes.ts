import controllers from "./controllers";

const { calculateSum } = controllers;

const makeRoutes = (router: any) => {

  router.post("/add", calculateSum);

  return router;
};

export default makeRoutes;
