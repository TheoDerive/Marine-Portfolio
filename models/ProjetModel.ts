import mongoose, { Schema } from "mongoose";

const ProjetSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  presImg: {
    type: String,
    require: true,
  },
  ctxImg: {
    type: Array,
    require: true,
  },
  challengeImg: {
    type: Array,
    require: true,
  },
  solutionImg: {
    type: Array,
    require: true,
  },
  resultImg: {
    type: Array,
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
  client: {
    type: String,
    require: true,
  },
  duree: {
    type: String,
    require: true,
  },
  lien: {
    type: String,
    require: false,
  },
  service: {
    type: String,
    require: true,
  },
});

export default mongoose.models.Projets ||
  mongoose.model("Projets", ProjetSchema);
