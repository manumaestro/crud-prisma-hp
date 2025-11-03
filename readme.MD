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
