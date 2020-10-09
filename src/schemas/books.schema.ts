import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema(
  {
    nom: String,
    description: String,
    annee: String,
  },
  {
    versionKey: false,
  },
);
