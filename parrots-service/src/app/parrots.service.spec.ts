import { Test } from '@nestjs/testing';

import { ParrotsService } from './parrots.service';

describe('AppService', () => {
  let service: ParrotsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ParrotsService],
    }).compile();

    service = app.get<ParrotsService>(ParrotsService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello from parrots. Chirp!' });
    });
  });
});
