import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { OTPGenerator } from "src/utils/otpgenerator";
import { Otp } from "./schema/otp.schema";

@Injectable()
export class EmailService { 
    constructor(
        private mailerService: MailerService,
        @InjectModel(Otp.name)
        private otpModel: mongoose.Model<Otp>
    ) {}
    async sendEmail(toemail:any){
        try{
            const otp = OTPGenerator.generateOTP(6);
            await this.mailerService.sendMail({
                to:toemail,
                from:'barunwahengbam2@gmail.com',
                subject:'OTP for login',
                text:otp
            })
            const credential = await this.otpModel.create(
                {
                    email:toemail,
                    otp:otp
                }
            )/** = new this.otpModel({
                    email:toemail,
                    otp:otp
                })
                await credenial.save();*/ 

            return {"message":"OTP Sent Successfully"}
        }
        catch(err){
            return {"message":"Cannot Send the OTP"}
        }
    }
}