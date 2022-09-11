import {Test, TestingModule} from '@nestjs/testing';
import {AuthService} from './auth.service';
import {JwtService} from "@nestjs/jwt";
import {LocalStrategy} from "./local.strategy";
import {JwtStrategy} from "./jwt.strategy";

describe('AuthService', () => {
    let service: AuthService;
    let jwtService: JwtService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthService, LocalStrategy, JwtStrategy],
        }).compile();

        service = module.get<AuthService>(AuthService);
        jwtService = module.get<JwtService>(JwtService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
