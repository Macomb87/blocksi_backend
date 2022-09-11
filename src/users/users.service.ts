import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../typeorm";
import {Repository} from "typeorm";


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({where: {email: email}});

    }

    registerUser(newUser: User): Promise<User> {
        return this.userRepository.save(this.userRepository.create(newUser));
    }

    getUsers(): Promise<User[] | undefined> {
        return this.userRepository.find();
    }

    findUsersById(id: number): Promise<User | undefined> {
        return this.userRepository.findOne({where: {id: id}});
    }
}
