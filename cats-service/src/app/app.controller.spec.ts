import { Test, TestingModule } from '@nestjs/testing';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<CatsController>(CatsController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
