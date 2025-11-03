import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const findAll = async () => {
  return await prisma.bruxo.findMany({
    orderBy: { name: 'asc' }
  });
};


export const findById = async (id) => {
  return await prisma.bruxo.findUnique({
    where: { id: Number(id) },
  });
};


export const create = async (data) => {
  return await prisma.bruxo.create({
    data: {
      name: data.name,
      email: data.email,
      age: Number(data.age),
      dead: data.dead,
    },
  });
}


export const update = async (id, data) => {
  return await prisma.bruxo.update({
    where: { id: Number(id) },
    data: {
      name: data.name,
      email: data.email,
      age: Number(data.age),
      dead: data.dead
    }
  });
}


export const deleteBruxo = async (id) => {
  return await prisma.bruxo.delete({
    where: { id: Number(id) },
  });
}
