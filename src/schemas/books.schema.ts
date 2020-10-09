import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export const BookSchema = new mongoose.Schema({
    nom: String,
    description: String,
    annee: String,
  
  });