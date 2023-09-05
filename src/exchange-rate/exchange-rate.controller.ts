import { Controller, Get } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { Cron } from '@nestjs/schedule';

@Controller('exchange-rate')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  @Cron('0/10 * * * * *')
  async mySchedule() {
    this.exchangeRateService.mySchedule();
  }

  @Get()
  async getExchangeRate() {
    return await this.exchangeRateService.getExchangeRate();
  }
}
