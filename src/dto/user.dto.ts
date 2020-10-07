import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(6, { message: 'Password is too short (6 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;
}