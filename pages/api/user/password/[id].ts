import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: Req, res: Res) {
  const prisma = new PrismaClient();
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const updateName = await prisma.user.update({
        where: {
          id: String(id),
        },

        data: {
          password: req.body.password,
        },
      });

      return res.status(200).json({ message: "senha atualizada com sucesso" });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "error ao tentar atualizar a senha" });
    }
  }
}
