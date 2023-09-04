import { Injectable } from '@nestjs/common';
import { SlackService } from 'nestjs-slack';
import { SendMessageDTO } from './dto/send-message.dto';

@Injectable()
export class SlackMessageService {
  constructor(private readonly slackService: SlackService) {}

  async sendMessage({ text }: SendMessageDTO) {
    try {
      // DM 보내기
      await this.slackService.postMessage({
        channel: process.env.USER_ID,
        text: text,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
