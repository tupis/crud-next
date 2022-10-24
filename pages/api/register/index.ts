import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";
import bcypt from "bcrypt";
import { sign } from "../../../services/api/jwt";

export default async function handler(req: Req, res: Res) {
  const prisma = new PrismaClient();

  function hashPassword(password: string): Promise<string> | void {
    const hashedPassword = bcypt.hash(password, 10);
    return hashedPassword;
  }

  if (req.method === "POST") {
    try {
      const { password } = req.body;

      const hashedPassword = await hashPassword(password);

      const user = await prisma.user.create({
        data: { ...req.body, password: hashedPassword },
      });

      const token = await sign(user, String(process.env.JWT_SECRET));

      return res.status(200).json(token);
    } catch (error) {
      return res.status(404).json({ message: "error ao tentar criar usuário" });
    }
  }
}
