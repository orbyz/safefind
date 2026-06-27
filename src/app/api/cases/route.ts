import { NextResponse } from "next/server";

import {
  createCaseService,
  getCasesService,
} from "@/modules/cases/application/case.service";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q") ?? "";

  const limit = Number(searchParams.get("limit") ?? "9");

  const data = await getCasesService(q, limit);

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const data = await createCaseService(body);

  return NextResponse.json(data, {
    status: 201,
  });
}
