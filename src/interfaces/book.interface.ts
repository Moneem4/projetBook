import { Document } from 'mongoose';
export interface Book extends Document {
  findById(id: any, arg1: (err: any, user: any) => any);
  nom: string;
  description: string;
  annee: string;
}
