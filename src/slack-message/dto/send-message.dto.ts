import { IsNotEmpty, IsString } from 'class-validator';

export class SendMessageDTO {
  @IsNotEmpty({ message: '데이터를 입력해주세요.' })
  @IsString()
  text: string;
}
