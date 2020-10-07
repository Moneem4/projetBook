import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import{Book} from '../interfaces/book.interface'
import{CreateBookDTO} from'../dto/book.dto'
import { query } from 'express';
@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private  book: Model<Book>) {}
    
      getoneBook(id):Promise<Book>
      {
    const book=  this.book.findById(id).exec();
    if (!book) {
        throw new HttpException('book not found', HttpStatus.UNAUTHORIZED);    
    }
      return book;
      }

      getBooks() {   
       return this.book.find();
      }
    
      createBook(@Res() res,book:CreateBookDTO) {
        const createbook = new this.book(book);       
 createbook.save();
 return res.status(HttpStatus.OK).json({
    message: "Post has been created successfully",
    createbook
    })
     
      }
    
       async updateBook(id:string,book:CreateBookDTO):Promise<any> {
       return await this.book.findByIdAndUpdate(id, book, { useFindAndModify:false});
      
       
     
      }
    
       async deleteBook(id):Promise<any> {
        return await this.book.findByIdAndRemove(id);
       
      }

}
