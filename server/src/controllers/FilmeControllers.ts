import { Request, Response } from "express";
import { marvel } from "../services/marvel";

export default {
  async infoMarvel(req: Request, res: Response) {
    try {
      const { data } = await marvel.get("/characters?offset=40&limit=20");

      return res.status(200).json(data.data);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },
};
