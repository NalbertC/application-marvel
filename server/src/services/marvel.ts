import axios from "axios";
import * as crypto from "crypto";
import "dotenv/config";

export function gerarHashMD5(dados: string) {
  const hash = crypto.createHash("md5");
  hash.update(dados);
  return hash.digest("hex");
}

const apikey = process.env.MARVEL_API_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;
const ts = Date.now();

export const marvel = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",

  headers: {
    Accept: "*/*",
  },
  params: {
    ts,
    apikey,
    hash: gerarHashMD5(ts + privateKey + apikey),
  },
});
