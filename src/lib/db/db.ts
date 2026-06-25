import mongoose, { Mongoose } from "mongoose";
import { env } from "@/lib/config/env";

declare global {
  var __mongoose:
    | {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      }
    | undefined;
}

const cached = global.__mongoose ?? {
  conn: null,
  promise: null,
};

global.__mongoose = cached;

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(env.MONGODB_URI, {
      dbName: "safefind",
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}
