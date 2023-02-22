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
            user:'apikey',
            pass:'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'
          }
        }
      }),
      MongooseModule.forFeature([{ name: "Otp", schema: OtpSchema }])
    ],
    controllers: [EmailController],
    providers: [EmailService],
  })
  export class EmailModule {}
  