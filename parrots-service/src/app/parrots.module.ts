import { Module } from '@nestjs/common';

import { ParrotsController } from './parrots.controller';
import { ParrotsService } from './parrots.service';

@Module({
  imports: [],
  controllers: [ParrotsController],
  providers: [ParrotsService],
})
export class ParrotsModule {}
