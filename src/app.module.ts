import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SlackMessageModule } from './slack-message/slack-message.module';
import { ExchangeRateModule } from './exchange-rate/exchange-rate.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    SlackMessageModule,
    ExchangeRateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
