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

  @Put('update/:id')
  async updateBook(@Res() res, @Param('id') id: string, @Body() book: CreateBookDTO) {
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

    if (!book) throw new NotFoundException('book does not exist');
    return  res.status(HttpStatus.OK).json({
      message: 'book has been deleted',
      book,
    });
  }
}
