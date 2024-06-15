import { Test, TestingModule } from '@nestjs/testing';

import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [DogsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<DogsController>(DogsController);
      expect(appController.getData()).toEqual({ message: 'Hello from the Dogs service. Woof!' });
    });
  });
});
