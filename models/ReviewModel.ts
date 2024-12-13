import mongoose, { Schema } from "mongoose";

const ReviewSchema = new Schema({
  image: {
    type: String,
    require: true,
  },
  entrepriseName: {
    type: String,
    require: true,
  },
  stars: {
    type: Number,
    require: true,
  },
  personne: {
    type: String,
    require: true,
  },
  poste: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

export default mongoose.models.Reviews ||
  mongoose.model("Reviews", ReviewSchema);
