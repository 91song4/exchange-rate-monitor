import { Body, Controller, Get, Post } from '@nestjs/common';
import { SlackMessageService } from './slack-message.service';
import { SendMessageDTO } from './dto/send-message.dto';

@Controller('slack-message')
export class SlackMessageController {
  constructor(private readonly slackMessageService: SlackMessageService) {}

  @Post()
  sendMessage(@Body() sendMessageDTO: SendMessageDTO) {
    return this.slackMessageService.sendMessage(sendMessageDTO);
  }
}
