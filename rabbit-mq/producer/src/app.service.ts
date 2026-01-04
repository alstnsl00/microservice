import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('TEST_SERVICE') private readonly client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendUserMessage() {
    const payload = { goal: 'test' };
    return this.client.send('test', payload);
  }
}
