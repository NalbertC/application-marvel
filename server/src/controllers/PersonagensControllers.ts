import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../database";
import { marvel } from "../services/marvel";

export default {
  async TodosPersonagens(req: Request, res: Response) {
    try {
      const { offset } = req.query;

      const { data } = await marvel.get(`/characters`, {
        params: {
          limit: 20,
          offset: offset ? offset : 0,
        },
      });

      return res.status(200).json(data.data);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },

  async PersonagensFavoritos(req: Request, res: Response) {
    try {
      const meusPersonagens = await prisma.personagemFavorito.findMany();

      return res.status(200).json(meusPersonagens);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Erro interno no servidor");
    }
  },

  async adicionarPersonagem(req: Request, res: Response) {
    try {
      const corpoRequisicaoCriarPersonagem = z.object({
        nome: z.string(),
        descricao: z.string().optional(),
        imagem: z.string(),
        extensao: z.string(),
        idMarvel: z.number(),
      });

      const { extensao, idMarvel, imagem, nome, descricao } =
        corpoRequisicaoCriarPersonagem.parse(req.body);

      const verificarPersonagem = await prisma.personagemFavorito.findUnique({
        where: {
          idMarvel,
        },
      });

      if (verificarPersonagem) {
        return res.status(400).json("Personagem já existe");
      }

      const criarPersonagem = await prisma.personagemFavorito.create({
        data: {
          extensao,
          idMarvel,
          imagem,
          nome,
          descricao,
        },
      });

      return res
        .status(201)
        .json({ message: "Personagem cadastrado", criarPersonagem });
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },

  async deletarPersonagem(req: Request, res: Response) {
    try {
      const parametroExcluirPersonagem = z.object({
        idMarvel: z.string(),
      });

      const { idMarvel } = parametroExcluirPersonagem.parse(req.params);

      const verificarPersonagem = await prisma.personagemFavorito.findUnique({
        where: {
          idMarvel: Number(idMarvel),
        },
      });

      if (!verificarPersonagem) {
        return res.status(400).json("Persanagem não existe");
      }

      await prisma.personagemFavorito.delete({
        where: {
          idMarvel: verificarPersonagem.idMarvel,
        },
      });

      return res.status(200).json("Personagem deletado");
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },
};
