import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/db";
import { CaseModel } from "@/modules/cases/infrastructure/case.model";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await connectDB();

  const { id } = await params;

  const person = await CaseModel.findById(id);

  if (!person) {
    return NextResponse.json(
      { message: "Caso no encontrado" },
      { status: 404 },
    );
  }

  return NextResponse.json(person);
}
