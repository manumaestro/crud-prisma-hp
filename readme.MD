# 🧙‍♂️ Configuração do Projeto Hogwarts (Prisma + Express + PostgreSQL)

## ⚙️ Inicialização do Projeto

```bash
npm init -y
```

## 📦 Instalação das Dependências

```bash
npm i express nodemon prisma @prisma/client
```

## 🧭 Configuração do Prisma

```bash
npx prisma init --datasource-provider postgresql
```

---

## 🧩 Arquivo `.env`

```env
DATABASE_URL="postgresql://postgres:123@localhost:7007/hogwarts_db"
```

---

## 🗂️ Arquivo `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Exemplo de modelo
model User {
  id        Int      @id @default(autoincrement())
  name      String?
  email     String   @unique
  age       Int
  dead      Boolean  @defaukt(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("user")
}
```

---

## 🚀 Migrações

```bash
npx prisma migrate dev --name init
```

> ⚠️ Caso já exista um banco de dados e você queira **reiniciar**, use:

```bash
npx prisma migrate reset
```

## 🔧 Gerar o cliente Prisma

```bash
npx prisma generate
```

---

## 🌱 Semeando o Banco de Dados

### Adicione no `package.json`:

```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```

### Arquivo: `prisma/seed.js`

```js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Harry Potter", email: "harry@gmail.com", age: 15 },
      { name: "Hermione Granger", email: "hermione@gmail.com", age: 16 },
      { name: "Ron Weasley", email: "ron@gmail.com", age: 15 },
    ],
    skipDuplicates: true,
  });

  console.log("🌱 Seed concluído!");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

---

## ⚡ Rodar os Comandos Finais

```bash
npx prisma generate
npx prisma db seed
npm run studio
```

```
## ❌ Caso der erro e tiver aparecendo 5k+ alterações no commit rodar os seguintes comandos: 

git rm -r --cached node_modules
git rm --cached .env
git add .
git commit -m "Commit aqui"
git push origin main

Se der erro de dll.
Apagar node_modules e rodar: 
rm -rf node_modules
rm package-lock.json 
npm install        
Isso força o Node a reconstruir os binários do Prisma sem conflito
Rodar novamente npx prisma generate



erro de prisma migrate reset 

npx prisma db pull

<<<<<<< HEAD
model: 

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const findAll = async () => {
    return await prisma.filme.findMany({
        orderBy: { nome: 'asc' }
    });
}


export const findById = async (id) => {
    return await prisma.filme.findUnique({
        where: { id: Number(id) }
    });
}

export const create = async (data) => {
    return await prisma.filme.create({
        data: {
            teoria: data.teoria,
            filme: data.filme,
            autor: data.autor,
            categoria: data.categoria,
            evidencias: data.evidencias,
            status: data.status,
            dataCriacao: data.dataCriacao
        }
    })
}

export const deleteFilmes = async (id) => {
    return await prisma.filme.delete({
        where: { id: Number(id) }
    })
}


export const update = async (id, data) => {
    return await prisma.filme.update({
        where: { id: Number(id) },
        data: {
            ...(data.teoria && { teoria: data.teoria }),
            ...(data.filme && { filme: data.filme }),
            ...(data.autor && { autor: data.autor }),
            ...(data.categoria && { categoria: data.categoria }),
            ...(data.evidencias && { evidencias: data.evidencias }),
            ...(data.popularidade && { popularidade: data.popularidade }),
            ...(data.dataCriacao && { dataCriacao: data.dataCriacao }),
            ...(data.status && { status: Number(data.status) })
        }
    })
}

seed: 

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.teorias.createMany({
    data: [
{
    "id": 2,
    "teoria": "Aterrissagem na Lua foi encenada em um estúdio.",
    "filme": "N/A (Evento Histórico)",
    "autor": "Bill Kaysing (popularizado por outros na internet)",
    "categoria": "Teoria da Conspiração",
    "evidencias": "A bandeira americana tremulando no vácuo, a ausência de estrelas nas fotos, e a iluminação não natural das imagens.",
    "popularidade": "Moderada a Alta (persistente desde os anos 70)",
    "status": "Cientificamente Refutada (pela NASA e cientistas independentes)",
    "dataCriacao": "2025-11-03T15:05:00Z"
  },
  
  {
    "id": 3,
    "teoria": "Todo o universo de 'Breaking Bad' e 'Better Call Saul' é um sonho ou coma de Walter White.",
    "filme": "Breaking Bad / Better Call Saul (Série de TV)",
    "autor": "Comunidade de fãs",
    "categoria": "Teoria de Fã",
    "evidencias": "O uso de planos de câmera oníricos, a jornada de Walter parecer 'completa demais' na conclusão, e o final ambíguo.",
    "popularidade": "Média (especialmente popular após o final de Breaking Bad)",
    "status": "Altamente Improvável / Não confirmada",
    "dataCriacao": "2025-11-03T15:06:00Z"
  },
  
  {
    "id": 4,
    "teoria": "Houve problemas de re-gravação e mudança de direção massivos no filme 'Liga da Justiça' de 2017, resultando em duas versões distintas.",
    "filme": "Liga da Justiça (2017)",
    "autor": "Fontes de imprensa e insiders da indústria (originalmente 'The Hollywood Reporter')",
    "categoria": "Rumor / Fato de Produção",
    "evidencias": "Mudanças visuais notáveis nos personagens, o bigode removido digitalmente de Henry Cavill, e o lançamento posterior da 'Snyder Cut'.",
    "popularidade": "Confirmada (o lançamento da 'Snyder Cut' validou muitas alegações)",
    "status": "Confirmada / Fato",
    "dataCriacao": "2025-11-03T15:07:00Z"
  },
  
  {
    "id": 5,
    "teoria": "Os habitantes de 'Matrix' são, na verdade, controlados por um nível secundário da Matrix para aqueles que 'acordaram'.",
    "filme": "The Matrix (Trilogia)",
    "autor": "Análises de Críticos e Filosofia",
    "categoria": "Interpretação Filosófica",
    "evidencias": "A limitação de poderes fora da Matrix, a incapacidade de 'sair' totalmente, e a existência do 'Arquiteto' e 'Oráculo' como mecanismos de controle.",
    "popularidade": "Baixa a Média (popular em círculos acadêmicos e fãs hardcore)",
    "status": "Interpretação Aberta",
    "dataCriacao": "2025-11-03T15:08:00Z"
  },
  
  {
    "id": 6,
    "teoria": "A Apple está desenvolvendo um carro elétrico autônomo ('Apple Car').",
    "filme": "N/A (Boato de Tecnologia)",
    "autor": "Jornalistas e analistas de cadeia de suprimentos (e.g., Ming-Chi Kuo)",
    "categoria": "Boato de Tecnologia / Produto",
    "evidencias": "Contratação de engenheiros automotivos e inteligência artificial, registros de patentes relacionados a veículos, e relatos de negociações com fabricantes.",
    "popularidade": "Alta (boato recorrente e de alto perfil)",
    "status": "Não Confirmado Oficialmente",
    "dataCriacao": "2025-11-03T15:09:00Z"
  }
    ],
    skipDuplicates: true,
  });

  console.log('Seed concluído!');
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


routes: import { Router } from "express";
import * as BruxoController from './../controller/teoriasController.js'

const router = Router();


router.get("/", teoriasController.listarTodos);
router.get("/:id", teoriasController.listarUm)
router.post("/", teoriasController.criar)
router.delete("/:id", teoriasController.apagar)
router.put("/:id", teoriasController.atualizar)

export default router;
=======

C:\Users\Aluno DS\Desktop\sistema-teoria-de-filmes>node prisma/seed.js
Erro no seed: TypeError: Cannot read properties of undefined (reading 'createMany')
    at main (file:///C:/Users/Aluno%20DS/Desktop/sistema-teoria-de-filmes/prisma/seed.js:5:22)    
    at file:///C:/Users/Aluno%20DS/Desktop/sistema-teoria-de-filmes/prisma/seed.js:73:1
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)
>>>>>>> 869428848e5a094969a966a8269b30299112664a
