import { useEffect, useState } from "react";
import { CardPersonagem } from "../components/CardPersonagem";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Paginacao } from "../components/Paginacao";
import { api } from "../services/api";

export interface Resposta {
  offset: number,
  "limit": number,
  "total": number,
  "count": number,
  "results": Result[]
}

export interface Result {
  "id": number,
  "name": "string",
  "description": "string",
  "thumbnail": {
    "path": "string",
    "extension": "string"
  }
}

export function Home() {
  const [personagens, setPersonagens] = useState<Resposta>({} as Resposta);
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/personagens?offset=${(paginaAtual - 1) * 20}`)
        console.log(data)

        setPersonagens(data)

      } catch (error) {
        console.error(error);
      }
    })();
  }, [paginaAtual]);


  return (
    <div className="h-screen w-full flex flex-col items-center ">
      <Header />

      <main className="flex-1 max-w-6xl w-full p-4">
        <div className="flex flex-wrap justify-center gap-4">
          {
            personagens.results?.map(result => (

              <CardPersonagem key={result.id} description={result.description} id={result.id} name={result.name} thumbnail={result.thumbnail} />
            ))
          }
        </div>

        {/* <Paginacao onPageChange={onPageChange} /> */}
        <Paginacao totalItens={personagens.total} itensPorPagina={personagens.limit} paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />



      </main>

      <Footer />


    </div>
  )
}


