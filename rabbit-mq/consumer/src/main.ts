import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

function rabbitmqURL() {
  return `amqp://${process.env.RABBITMQ_ID}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`;
}

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [rabbitmqURL()],
        queue: 'my_queue',
        queueOptions: {
          // <-- queue Option 설정. 연결할 Queue 와 옵션이 동일해야만 제대로 연결된다. 안그러면 에러 발생
          durable: true, // rabbitmq 의 durable 옵션으로 rabbitmq 의 queue 가 어떠한 이상으로 죽거나 restart 될 때 데이터 유실 방지를 위한 옵션
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
