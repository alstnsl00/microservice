import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  constructor(@Inject('TEST_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    // Producer 연결을 활성화합니다.
    await this.client.connect();
  }

  @EventPattern('test-topic')
  handleTestTopic(@Payload() message: any) {
    console.log('--- Kafka Message Received! ---');
    console.log('Payload:', message);
  }
}
