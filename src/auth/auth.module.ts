import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'nestjs-config';
import { UserSchema } from 'src/schemas/user.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt-auth.strategy';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name:'User',
            schema:UserSchema,
            collection:'userss'
          }]),
        JwtModule.register({
            secret: "secret-key",
            signOptions: { expiresIn: '60s' },
          }),
      ],
      controllers: [AuthController],
      providers: [AuthService, LocalStrategy, JwtStrategy],

})
export class AuthModule {}
