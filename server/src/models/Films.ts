import mongoose from "mongoose";

const Schema = mongoose.Schema;

const filmSchema = new Schema(
{
  title: {type: String, required: true,},
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  created: { type: Date, default: Date.now },
  edited: { type: Date, default: Date.now },
},
{ timestamps: false }
);

export const Film = mongoose.model("Film", filmSchema);

export const deleteFilmById = (id: string) => Film.findOneAndDelete({ _id: id});
