import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { MongooseModule } from '@nestjs/mongoose'; 
import { BookSchema } from './schemas/books.schema';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
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
   /* MongooseModule.forFeature([{
    name:'Book',
    schema:BookSchema,
    collection:'books'
  }]), */

], 
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
