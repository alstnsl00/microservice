# RabbitMQ

#### 도커로 RabbitMQ 설치 방법
```$ docker-compose up```

## 설치 후 확인 및 주의사항
#### 설치 후 웹 UI(관리자 대시보드)는 http://localhost:15672/ 에서 접속

#### RabbitMQ 계정 생성
```$ rabbitmqctl add_user admin password```
#### RabbitMQ 태그(역할) 설정
```$ rabbitmqctl set_user_tags admin administrator```
#### RabbitMQ 가상호스트 권한 설정
```$ rabbitmqctl set_permissions -p / admin ".\*" ".\*" ".\*"```

#### 설치 후 brew services list 명령어로 RabbitMQ 서비스가 정상적으로 실행 중인지 확인

## 기본 설치 패키지
```$ npm i --save amqplib amqp-connection-manager @nestjs/microservices```

#### Consumer : 메시지를 받는 서비스
- NestJS Microservice를 사용하여 RabbitMQ를 구독하고 메시지를 처리
- @MessagePattern 데코레이터를 사용하여 메시지 패턴에 따라 메시지를 처리
#### Producer : 메시지를 보내는 서비스
- NestJS Microservice를 사용하여 RabbitMQ로 메시지를 전송
- @MessagePattern 데코레이터를 사용하여 메시지 패턴에 따라 메시지를 전송