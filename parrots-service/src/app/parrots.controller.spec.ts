import { Test, TestingModule } from '@nestjs/testing';

import { ParrotsController } from './parrots.controller';
import { ParrotsService } from './parrots.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ParrotsController],
      providers: [ParrotsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<ParrotsController>(ParrotsController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
