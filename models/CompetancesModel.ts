import mongoose, { Schema } from "mongoose";

const CompetanceSchema = new Schema({
  name: String,
  image: String,
});

export default mongoose.models.Competances ||
  mongoose.model("Competances", CompetanceSchema);
