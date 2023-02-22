import { Controller, Get, Query } from "@nestjs/common";
import { EmailService } from "./email.service";


@Controller("email")
export class EmailController {
    constructor(private emailService: EmailService) {}
    
    @Get('send-otp-email')   
    sendEmail(@Query('toemail') toemail:string){
        return this.emailService.sendEmail(toemail)
    }
}