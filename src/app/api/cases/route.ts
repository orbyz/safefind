import { NextResponse } from "next/server";

import {
  createCaseService,
  getCasesService,
} from "@/modules/cases/application/case.service";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q") ?? "";

  const data = await getCasesService(q);

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const data = await createCaseService(body);

  return NextResponse.json(data, {
    status: 201,
  });
}
