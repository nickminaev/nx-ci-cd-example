import { Injectable } from '@nestjs/common';

@Injectable()
export class ParrotsService {
  getData(): { message: string } {
    return { message: 'Hello from parrots. Chirp!' };
  }
}
