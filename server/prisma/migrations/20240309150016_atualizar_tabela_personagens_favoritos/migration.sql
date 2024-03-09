/*
  Warnings:

  - You are about to alter the column `idMarvel` on the `personagem_favorito` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_personagem_favorito" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "imagem" TEXT NOT NULL,
    "extensao" TEXT NOT NULL,
    "idMarvel" INTEGER NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_personagem_favorito" ("atualizado_em", "criado_em", "descricao", "extensao", "id", "idMarvel", "imagem", "nome") SELECT "atualizado_em", "criado_em", "descricao", "extensao", "id", "idMarvel", "imagem", "nome" FROM "personagem_favorito";
DROP TABLE "personagem_favorito";
ALTER TABLE "new_personagem_favorito" RENAME TO "personagem_favorito";
CREATE UNIQUE INDEX "personagem_favorito_idMarvel_key" ON "personagem_favorito"("idMarvel");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
