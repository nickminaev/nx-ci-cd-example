import { Test } from '@nestjs/testing';

import { DogsService } from './dogs.service';

describe('AppService', () => {
  let service: DogsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [DogsService],
    }).compile();

    service = app.get<DogsService>(DogsService);
  });

  describe('getData', () => {
    test('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello from the Dogs service. Woof!' });
    });
  });
});
