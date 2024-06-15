import { Test } from '@nestjs/testing';

import { CatsService } from './cats.service';

describe('AppService', () => {
  let service: CatsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = app.get<CatsService>(CatsService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello cats!' });
    });
  });
});
