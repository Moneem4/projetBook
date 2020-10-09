import {
  Controller,
  Res,
  Query,
  Get,
  HttpStatus,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from '../dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('all')
  getBooks() {
    return this.booksService.getBooks();
  }
  @Get('get/:id')
  async getoneBook(@Param('id') id: string): Promise<any> {
    const book = await this.booksService.getoneBook(id);

    return book;

    //  return res.status(HttpStatus.OK).json({ book  })
  }

  @Post('add')
  createBook(@Res() res, @Body() book: CreateBookDTO) {
    this.booksService.createBook(res, book);
    return res.status(HttpStatus.OK).json({
      message: 'book has been created successfully',
      book,
    });
  }

<<<<<<< HEAD
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
  
=======
  @Put('update')
  async updateBook(@Res() res, @Query('id') id: string, @Body() book: CreateBookDTO) {
    const bookupdated = await this.booksService.updateBook(id, book);
    if (!bookupdated) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'book has been successfully updated',
      bookupdated,
    });
  }

  @Delete('delete/:id')
  async deleteBook(@Res() res, @Param('id') id) {
    // console.log('delete book', params.id);
    const book = await this.booksService.deleteBook(id);
>>>>>>> 1144210403e4f91ac2b7dfcbc64a283d36f68980

    if (!book) throw new NotFoundException('book does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'book has been deleted',
      book,
    });
  }
}
