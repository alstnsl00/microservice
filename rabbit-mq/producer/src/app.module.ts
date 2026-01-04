import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

function rabbitmqURL() {
  return `amqp://${process.env.RABBITMQ_ID}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`;
}

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [rabbitmqURL()],
          queue: 'my_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
