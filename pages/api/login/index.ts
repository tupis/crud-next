import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { sign } from "../../../services/api/jwt";

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
        return res.status(401).json({ message: "email ou senha inválidos" });
      }

      const isCorrectPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!isCorrectPassword) {
        return res.status(401).json({ message: "email ou senha inválidos" });
      }

      Object.defineProperty(user, "password", {
        enumerable: false,
      });

      const token = await sign(user, String(process.env.JWT_SECRET));

      return res.status(200).json(token);
    } catch (error) {
      return res.status(401).json({ message: "error ao tentar fazer login" });
    }
  }
}
