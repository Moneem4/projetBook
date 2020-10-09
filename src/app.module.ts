import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD

import { MongooseModule } from '@nestjs/mongoose'; 


=======
import { MongooseModule } from '@nestjs/mongoose';
>>>>>>> 1144210403e4f91ac2b7dfcbc64a283d36f68980
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    AuthModule,
    BooksModule,
<<<<<<< HEAD
    MongooseModule.forRoot("mongodb://localhost:27017/Devmetter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }),  

=======
    MongooseModule.forRoot('mongodb://localhost:27017/Devmetter', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
  ],
>>>>>>> 1144210403e4f91ac2b7dfcbc64a283d36f68980

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
