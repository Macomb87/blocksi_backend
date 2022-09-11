import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UsersService} from "./users.service";
import {User} from "../typeorm";

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {
    }


    @UseGuards(JwtAuthGuard)
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
    @UseGuards(JwtAuthGuard)
    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
    }

    @Post('register')
    @UsePipes(ValidationPipe)
    registerUser(@Body() createUser: User) {
        return this.userService.registerUser(createUser);
    }

}
