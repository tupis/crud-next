import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: Req, res: Res) {
  const prisma = new PrismaClient();
  const { id } = req.query;

  if (req.method === "GET") {
    res.status(200).send(`<h1>Ola Mundo, ${id}</h1>`);
  }

  if (req.method === "PUT") {
    try {
      const updateName = await prisma.user.update({
        where: {
          id: String(id),
        },

        data: {
          name: req.body.name,
        },
      });

      return res.status(200).json({ message: "nome atualizado com sucesso" });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "error ao tentar atualizar o nome" });
    }
  }
}
