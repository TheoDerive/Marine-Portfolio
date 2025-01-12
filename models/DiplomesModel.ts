import mongoose, { Schema } from "mongoose";

const DiplomesSchema = new Schema({
  name: String,
  school: String,
  description: String,
});

export default mongoose.models.Diplomes ||
  mongoose.model("Diplomes", DiplomesSchema);
