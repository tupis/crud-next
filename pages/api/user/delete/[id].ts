import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: Req, res: Res) {
  const prisma = new PrismaClient();
  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      const deleteUser = await prisma.user.delete({
        where: {
          id: String(id),
        },
      });
      return res.status(200).json({ message: "usuário deletado com sucesso" });
    } catch (error) {
      return res.status(404).json({ message: "erro ao excluir o usuário" });
    }
  }
}
