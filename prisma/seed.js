import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.bruxo.createMany({
    data: [
      { name: 'Harry Potter', email: 'harry@gmail.com', age: 15 },
      { name: 'Hermione Granger', email: 'hermione@gmail.com', age: 16 },
      { name: 'Ron Weasley', email: 'ron@gmail.com', age: 15 },
      { name: 'Alvo Dumbledore', email: 'alvo@gmail.com', age: 115 },
      { name: 'Severus Snape', email: 'snape@gmail.com', age: 38 },
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
