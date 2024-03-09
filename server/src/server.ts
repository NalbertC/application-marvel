import express from "express";
import morgan from "morgan";

import { routes } from "./routes";

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(routes);

server.listen(5500, () => {
  console.log("Servidor rodando na porta 5000");
});
