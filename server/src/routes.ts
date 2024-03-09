import { Router } from "express";
import PersonagensControllers from "./controllers/PersonagensControllers";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json("Hello World!");
});

// Pegar todos os personagens da marvel
routes.get("/personagens", PersonagensControllers.TodosPersonagens);

// Meu personagens favoritos
routes.get(
  "/personagens/favoritos",
  PersonagensControllers.PersonagensFavoritos
);

// Cadastrar personagem favorito
routes.post(
  "/personagens/cadastrar",
  PersonagensControllers.adicionarPersonagem
);

// Deletar personagem
routes.delete(
  "/personagens/deletar/:idMarvel",
  PersonagensControllers.deletarPersonagem
);

export { routes };
