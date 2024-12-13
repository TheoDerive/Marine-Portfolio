import mongoose, { Schema } from "mongoose";

const ProjetSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  competances: {
    type: Array,
    require: true,
  },
  entreprise: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

export default mongoose.models.Projets ||
  mongoose.model("Projets", ProjetSchema);
