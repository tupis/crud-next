import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: Req, res: Res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    try {
      const user = await prisma.user.create({ data: req.body });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ message: "error ao tentar criar usuário" });
    }
  }
}
