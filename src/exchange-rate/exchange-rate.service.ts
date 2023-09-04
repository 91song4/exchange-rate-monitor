import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExchangeRateService {
  async getExchangeRate() {
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
