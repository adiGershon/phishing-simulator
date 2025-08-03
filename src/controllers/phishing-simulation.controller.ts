import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PhishingSimulationService } from '../services/phishing-simulation.service';

@Controller('phishing')
export class PhishingSimulationController {
  constructor(private readonly service: PhishingSimulationService) {}

  @Post('send')
  async sendPhishingEmail(@Body('email') email: string) {
    return this.service.sendPhishingEmail(email);
  }

  @Get('clicked/:id')
  async handleClick(@Param('id') id: string) {
    return this.service.markEmailAsClicked(id);
  }
}