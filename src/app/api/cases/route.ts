import { NextResponse } from "next/server";

import {
  createCaseService,
  getCasesService,
} from "@/modules/cases/application/case.service";

export async function GET() {
  const data = await getCasesService();

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const data = await createCaseService(body);

  return NextResponse.json(data, {
    status: 201,
  });
}
