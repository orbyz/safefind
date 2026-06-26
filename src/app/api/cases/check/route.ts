import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db/db";
import { CaseModel } from "@/modules/cases/infrastructure/case.model";
import { normalizeText } from "@/lib/utils/normalize";

export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");

  if (!name) {
    return NextResponse.json([]);
  }

  const normalized = normalizeText(name);

  const cases = await CaseModel.find({
    searchName: {
      $regex: normalized,
      $options: "i",
    },
  })
    .limit(5)
    .select("_id fullName city state status");

  return NextResponse.json(cases);
}
