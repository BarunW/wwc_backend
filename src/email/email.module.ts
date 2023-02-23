import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { EmailController } from "./email.controller";
import { EmailService } from "./email.service";
import { MongooseModule } from "@nestjs/mongoose";
import { OtpSchema } from "./schema/otp.schema";

@Module({
    imports: [
      MailerModule.forRoot({
        transport: {
          host:'smtp.sendgrid.net',
          auth: {
            user:'',
            pass:''
          }
        }
      }),
      MongooseModule.forFeature([{ name: "Otp", schema: OtpSchema }])
    ],
    controllers: [EmailController],
    providers: [EmailService],
  })
  export class EmailModule {}
  
