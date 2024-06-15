import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  getData(): { message: string } {
    return { message: 'Hello from the Dogs service. Woof!' };
  }
}
