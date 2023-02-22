import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Otp } from "src/email/schema/otp.schema";

@Injectable()
export class AuthService {
    @InjectModel(Otp.name)
    private otp_Model: mongoose.Model<Otp>

    async verifyOtp(credential:any,email:any){
        console.log(credential.otp,email);
        const result = await this.otp_Model.findOne({email:email});
        console.log(typeof(result.otp));
        console.log(typeof(credential.otp))
        
        if(result.otp !== parseInt(credential.otp)){
            return {"message":"Invalid OTP"}
        }
        return {"message":"OTP Verified Successfully"}
    } 
}