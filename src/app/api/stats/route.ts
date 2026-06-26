import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db/db";
import { CaseModel } from "@/modules/cases/infrastructure/case.model";

export async function GET() {
  await connectDB();

  const totalCases = await CaseModel.countDocuments();

  const pending = await CaseModel.countDocuments({
    status: "pending",
  });

  const verified = await CaseModel.countDocuments({
    status: "verified",
  });

  const found = await CaseModel.countDocuments({
    status: "found",
  });

  const closed = await CaseModel.countDocuments({
    status: "closed",
  });

  return NextResponse.json({
    totalCases,
    pending,
    verified,
    found,
    closed,
    version: "RC1",
    lastUpdate: new Date(),
  });
}
