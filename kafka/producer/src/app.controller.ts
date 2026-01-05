import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  constructor(@Inject('TEST_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    // 응답이 필요한 패턴을 사용할 경우 미리 토픽을 구독해야 함
    this.client.subscribeToResponseOf('resp-topic');
    await this.client.connect();
  }

  @Get('send')
  sendMessage() {
    const payload = {
      orderId: Math.floor(Math.random() * 1000),
      item: 'Laptop',
      price: 1500,
    };

    // 'test-topic'이라는 토픽으로 이벤트를 던집니다.
    this.client.emit('test-topic', payload);
    return { message: 'Message sent to Kafka', data: payload };
  }
}
