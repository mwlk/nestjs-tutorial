import { Controller, Get, Param, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';

@Controller('books')
export class BooksController {
  constructor(private _bookSvc: BooksService) {}

  @Get()
  findAll(@Req() request: Request) {
    return this._bookSvc.findAll(request.query);
  }

  @Get(':bookID')
  GetBookByID(@Param('bookID') bookID: string) {
    return this._bookSvc.findBook(bookID);
  }
}
