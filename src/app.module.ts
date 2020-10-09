import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose'; 


import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [AuthModule,
    BooksModule,
    MongooseModule.forRoot("mongodb://localhost:27017/Devmetter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }),  


], 
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
