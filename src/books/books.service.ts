import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  //   findAll(): any {
  //     return 'funcionaria';
  //   }

  findBook(id: string) {
    return `get book by id ${id}`;
  }

  findAll(params): any {
    let msg = `find all funcionando => Parametros : `;

    if (params.order !== undefined) {
      msg = msg + `order :${params.order}`;
    }

    if (params.limit !== undefined) {
      msg = msg + ` limit: ${params.limit}`;
    }

    return msg;
  }
}
