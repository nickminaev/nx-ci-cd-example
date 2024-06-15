import { Controller, Get, UseGuards } from '@nestjs/common';
import {AuthGuard } from '@ci-cd-optimizations-for-microservices/auth-guard'
import { ParrotsService } from './parrots.service';

@Controller('parrots')
@UseGuards(AuthGuard)
export class ParrotsController {
  constructor(private readonly parrotsService: ParrotsService) {}

  @Get()
  getData() {
    return this.parrotsService.getData();
  }
}
