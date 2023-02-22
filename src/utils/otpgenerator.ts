export class OTPGenerator {
    private static readonly _chars = '123456789';
    private static readonly _charsLength = OTPGenerator._chars.length;

    static generateOTP(length: number): string {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += OTPGenerator._chars.charAt(Math.floor(Math.random() * OTPGenerator._charsLength));
        }
        return result;
    }
}


