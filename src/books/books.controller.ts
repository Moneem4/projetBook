
import { Controller, Res, Query, Get, HttpStatus, Post, Body, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiQuery } from '@nestjs/swagger';
import{Book} from '../interfaces/book.interface'
import{CreateBookDTO} from'../dto/book.dto'
/* interface BookDto {
    id: string;
    name: string;
  } */

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get('all')
    getBooks() {
      return this.booksService.getBooks();
    }
    @Get('get/:id') 
    async getoneBook(@Param('id') id:string):Promise<any> {
    const book=await this.booksService.getoneBook(id);
    
  return book;
   
   //  return res.status(HttpStatus.OK).json({ book  })  
  }

  @Post('add')
  createBook(@Res() res,@Body() book: CreateBookDTO) {
   
    this.booksService.createBook(res,book);
    return res.status(HttpStatus.OK).json({
        message: "book has been created successfully",
        book
        })
  }

  @Put('update/:id')
  updateBook(@Param() param, @Res() res, @Body() body) {
  const bookupdated=  this.booksService.updateBook(param.id,body);
  return res.status(HttpStatus.OK).json(bookupdated);
  }

  @Delete('delete/:id')
  deleteBook(@Param() param, @Res() res) {
  
  const bookdeleted=  this.booksService.deleteBook(param.id);
  return res.status(HttpStatus.OK).json(bookdeleted);
  }
  

}
