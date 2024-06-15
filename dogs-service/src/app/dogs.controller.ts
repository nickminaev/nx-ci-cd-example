import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@ci-cd-optimizations-for-microservices/auth-guard';
import { DogsService } from './dogs.service';

@Controller('dogs')
@UseGuards(AuthGuard)
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getData() {
    return this.dogsService.getData();
  }
}
