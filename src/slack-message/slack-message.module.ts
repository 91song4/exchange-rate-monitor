import { Module } from '@nestjs/common';
import { SlackMessageController } from './slack-message.controller';
import { SlackMessageService } from './slack-message.service';
import { SlackModule } from 'nestjs-slack';
import { SlackConfig } from 'nestjs-slack/dist/types';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    SlackModule.forRootAsync({
      useFactory: (configService: ConfigService): SlackConfig => {
        return {
          type: 'api',
          defaultChannel: '#study',
          token: configService.get<string>('BOT_TOKEN'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [SlackMessageController],
  providers: [SlackMessageService],
  exports: [SlackMessageService],
})
export class SlackMessageModule {}
