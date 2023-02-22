import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Otp {
    @Prop()
    email: string;

    @Prop()
    otp: number;
}

export const OtpSchema = SchemaFactory.createForClass(Otp).index({otp:1},{expireAfterSeconds:5});