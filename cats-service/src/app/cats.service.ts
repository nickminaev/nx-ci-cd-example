import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getData(): { message: string } {
    return { message: 'Hello cats!' };
  }
}
