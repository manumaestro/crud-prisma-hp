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


C:\Users\Aluno DS\Desktop\sistema-teoria-de-filmes>node prisma/seed.js
Erro no seed: TypeError: Cannot read properties of undefined (reading 'createMany')
    at main (file:///C:/Users/Aluno%20DS/Desktop/sistema-teoria-de-filmes/prisma/seed.js:5:22)    
    at file:///C:/Users/Aluno%20DS/Desktop/sistema-teoria-de-filmes/prisma/seed.js:73:1
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)
