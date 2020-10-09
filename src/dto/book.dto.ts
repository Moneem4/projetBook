import { ApiProperty } from '@nestjs/swagger';
export class CreateBookDTO {
  @ApiProperty()
  nom: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  annee: string;
}
