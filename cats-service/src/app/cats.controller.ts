import { Controller, Get, UseGuards } from '@nestjs/common';
import {AuthGuard} from '@ci-cd-optimizations-for-microservices/auth-guard';
import { CatsService } from './cats.service';

@Controller('cats')
@UseGuards(AuthGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getData() {
    return this.catsService.getData();
  }
}
