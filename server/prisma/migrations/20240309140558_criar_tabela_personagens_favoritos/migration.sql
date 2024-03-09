-- CreateTable
CREATE TABLE "personagem_favorito" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "imagem" TEXT NOT NULL,
    "extensao" TEXT NOT NULL,
    "idMarvel" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "personagem_favorito_idMarvel_key" ON "personagem_favorito"("idMarvel");
