import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OtpSchema } from "src/email/schema/otp.schema";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name:"Otp", schema: OtpSchema}])
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}