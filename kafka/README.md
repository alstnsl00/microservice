# Kafka

#### 도커로 Kafka 설치 방법

`$ docker-compose up`

## 설치 후 확인 및 주의사항

#### 웹 UI(관리자 대시보드)는 http://localhost:8080/ 에서 접속

## 필수 설치 패키지

`$ npm i --save @nestjs/microservices kafkajs`

#### Consumer : 메시지를 받는 서비스

- NestJS Microservice를 사용하여 Kafka를 구독하고 메시지를 처리
- @EventPattern 데코레이터를 사용하여 메시지 패턴에 따라 메시지를 처리

#### Producer : 메시지를 보내는 서비스

- NestJS Microservice를 사용하여 Kafka로 메시지를 전송
- @MessagePattern 데코레이터를 사용하여 메시지 패턴에 따라 메시지를 전송
