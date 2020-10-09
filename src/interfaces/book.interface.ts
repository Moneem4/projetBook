import { Document } from 'mongoose';
<<<<<<< HEAD
export interface Book extends Document{
    nom: String,
    description: String,
    annee: String,
}
=======
export interface Book extends Document {
  findById(id: any, arg1: (err: any, user: any) => any);
  nom: string;
  description: string;
  annee: string;
}
>>>>>>> 1144210403e4f91ac2b7dfcbc64a283d36f68980
