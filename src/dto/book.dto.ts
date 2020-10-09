import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
export class CreateBookDTO {
  @ApiProperty()
  nom: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  annee: string;
}
