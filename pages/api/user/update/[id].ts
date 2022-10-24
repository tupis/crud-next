import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";
import { sign } from "../../../../services/api/jwt";

export default async function handler(req: Req, res: Res) {
  const prisma = new PrismaClient();
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: String(id),
        },

        data: {
          ...req.body,
        },
      });

      Object.defineProperty(updatedUser, "password", {
        enumerable: false,
      });

      const token = await sign(updatedUser, String(process.env.JWT_SECRET));

      return res.status(200).json(token);
    } catch (error) {
      return res
        .status(401)
        .json({ message: "error ao tentar atualizar o usuário" });
    }
  }
}
