import { Router } from "express";
import FilmeControllers from "./controllers/FilmeControllers";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json("Hello World!");
});

routes.get("/marvel", FilmeControllers.infoMarvel);

export { routes };
