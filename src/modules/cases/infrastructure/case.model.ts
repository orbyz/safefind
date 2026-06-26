import { Schema, model, models } from "mongoose";

const CaseSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    age: Number,

    gender: {
      type: String,
      default: "unknown",
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      default: "Venezuela",
    },

    lastSeenLocation: {
      type: String,
      required: true,
    },

    lastSeenAt: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    photo: {
      type: String,
      default: "",
    },

    contactName: {
      type: String,
      required: true,
    },

    contactPhone: {
      type: String,
      required: true,
    },

    contactEmail: String,

    status: {
      type: String,
      enum: ["pending", "verified", "found", "closed"],
      default: "pending",
    },

    verified: {
      type: Boolean,
      default: false,
    },

    verifiedBy: String,

    verifiedAt: Date,
  },
  {
    timestamps: true,
  },
);

export const CaseModel = models.Case || model("Case", CaseSchema);
