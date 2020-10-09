import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema(
  {
    nom: String,
    description: String,
    annee: String,
<<<<<<< HEAD
  
  });
=======
  },
  {
    versionKey: false,
  },
);
>>>>>>> 1144210403e4f91ac2b7dfcbc64a283d36f68980
