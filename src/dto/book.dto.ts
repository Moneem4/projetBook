import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
export class CreateBookDTO {
<<<<<<< HEAD
     @ApiProperty()
    _id:Object;
@ApiProperty()
 nom: String;
@ApiProperty()
 description: String;
@ApiProperty()
 annee: String;
}
=======
  @ApiProperty()
  nom: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  annee: string;
}
>>>>>>> 1144210403e4f91ac2b7dfcbc64a283d36f68980
