import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/wwc',{ useNewUrlParser: true, useUnifiedTopology: true }),
    EmailModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
