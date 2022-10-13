import mongoose from "mongoose";

const dailySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
        date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Daily = mongoose.models.Daily || mongoose.model("Daily", dailySchema);
export default Daily;
