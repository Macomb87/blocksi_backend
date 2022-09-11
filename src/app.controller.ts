import {Controller, Request, UseGuards, Get} from '@nestjs/common';
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

@Controller()
export class AppController {
    constructor() {
    }

    @Get('/')
    getTest() {
        return 'test';
    }


    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
