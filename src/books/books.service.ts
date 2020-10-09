import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import {Model} from 'mongoose';
var ObjectId = require('mongodb').ObjectID;
import {InjectModel} from '@nestjs/mongoose';
import{Book} from '../interfaces/book.interface'
import{CreateBookDTO} from'../dto/book.dto'
import { query } from 'express';
import { debug } from 'console';
@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private  book: Model<Book>) {}
    
      async getoneBook(id):Promise<Book>
      {
         
    return await this.book.findById(id).exec();
     
     
      }

   async   getBooks() {   
       return await this.book.find().exec();
      }
    
      createBook(@Res() res,book:CreateBookDTO) {
        const createbook = new this.book(book);       
 createbook.save();
 return res.status(HttpStatus.OK).json({
    message: "book has been created successfully",
    createbook
    })
     
      }
    
       async updateBook(id:Object,book:CreateBookDTO):Promise<CreateBookDTO | null> {
      //  const _id=mongoose.Types.ObjectId
        const bookT = await this.book.findById(id).exec();

        if (!bookT._id) {
            debug('book not found');
        }    
        await this.book.findByIdAndUpdate(id, book, { useFindAndModify:false}).exec();
        return await this.book.findById(id).exec();
       
     
      }
    
       async deleteBook(id:Object):Promise<String> {
        try {
            await this.book.findByIdAndRemove(id).exec();
            return   'The todo has been deleted';
            /* res.status(HttpStatus.OK).json({
                message: "book has been deleted successfully" }) */
        }
        catch (err){
            debug(err);
            return 'The todo could not be deleted';
            /* return res.status(404).json({
                message: "book was not found" }) */
        }
       
      }

}
