import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary/cloudinary";
import type { UploadApiResponse } from "cloudinary";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const formData = await request.formData();

  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json(
      { error: "No se recibió ninguna imagen." },
      { status: 400 },
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise<UploadApiResponse>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "safefind",
          resource_type: "image",
        },
        (error, result) => {
          if (error) {
            return reject(error);
          }

          if (!result) {
            return reject(
              new Error("Cloudinary no devolvió ningún resultado."),
            );
          }

          resolve(result);
        },
      )
      .end(buffer);
  });

  return NextResponse.json({
    url: result.secure_url,
  });
}
