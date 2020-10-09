

import { Document } from 'mongoose';
export interface Book extends Document{
    nom: String,
    description: String,
    annee: String,
}