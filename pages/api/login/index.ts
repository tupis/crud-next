import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: Req, res: Res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(401).json({ message: "usuário não encontrado" });
      }

      if (user.password != req.body.password) {
        return res.status(401).json({ message: "senha incorreta" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(401).json({ message: "error ao tentar fazer login" });
    }
  }
}
