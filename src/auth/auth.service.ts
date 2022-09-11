import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(email);
        if (user && user.password === pass) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        try {
            const foundUser = await this.validateUser(user.email, user.password);
            const payload = {username: foundUser.email, sub: foundUser.id};
            return {
                user: foundUser,
                access_token: this.jwtService.sign(payload),
            };

        } catch (err) {
            throw new UnauthorizedException();
        }

    }

}
