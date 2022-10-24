import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: Req, res: Res) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    const allUsers = await prisma.user.findMany();
    return res.status(200).json(allUsers);
  }
}
