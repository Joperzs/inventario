import { prismaClient } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const items = await prismaClient.item.findMany({
    orderBy: {
      epicness: "asc",
    },
  });

  return NextResponse.json({ items });
}
