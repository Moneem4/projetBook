import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
export class CreateBookDTO {
     @ApiProperty()
    _id:Object;
@ApiProperty()
 nom: String;
@ApiProperty()
 description: String;
@ApiProperty()
 annee: String;
}