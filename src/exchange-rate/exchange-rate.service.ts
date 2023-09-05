import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SendMessageDTO } from 'src/slack-message/dto/send-message.dto';
import { SlackMessageService } from 'src/slack-message/slack-message.service';
import axiosRetry from 'axios-retry';
@Injectable()
export class ExchangeRateService {
  constructor(private readonly slackMessageService: SlackMessageService) {}

  async mySchedule() {
    const sendMessageDTO: SendMessageDTO = {
      text: await this.getExchangeRate(),
    };
    await this.slackMessageService.sendMessage(sendMessageDTO);
  }

  async getExchangeRate() {
    axiosRetry(axios, { retries: 1 });
    const authkey: string = process.env.KOREAEXIM_KEY;

    const currentTimeKorea = new Date(
      new Date().getTime() + 1000 * 60 * 60 * 9,
    );
    const searchdate = currentTimeKorea.toISOString().split('T')[0];

    const { data } = await axios.get(
      `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${searchdate}&data=AP01`,
    );

    return data.filter(
      (item) => item.cur_unit === 'USD' || item.cur_unit === 'JPY(100)',
    );
  }
}
