import { Module } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRateController } from './exchange-rate.controller';
import { SlackMessageModule } from 'src/slack-message/slack-message.module';
import { SlackMessageService } from 'src/slack-message/slack-message.service';

@Module({
  imports: [SlackMessageModule],
  controllers: [ExchangeRateController],
  providers: [ExchangeRateService],
})
export class ExchangeRateModule {}
