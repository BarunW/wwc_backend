import { Controller,Post,Body, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller("auth")
export class AuthController {
    constructor(private authService:AuthService){}
    @Post("verify-otp")
    verifyOtp(@Body() body:string, @Query('email') email:string){
        // return "handling verify otp"
        return this.authService.verifyOtp(body,email);
    }
}