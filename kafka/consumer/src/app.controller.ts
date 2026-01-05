import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @EventPattern('test-topic')
  handleTestTopic(@Payload() message: any) {
    console.log('--- Kafka Message Received! ---');
    console.log('Payload:', message);
  }
}
