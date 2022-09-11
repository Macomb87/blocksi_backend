import {Module} from '@nestjs/common';
import {ContactListService} from './contact-list.service';
import {ContactListController} from './contact-list.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ContactList} from "../typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([ContactList])],
    controllers: [ContactListController],
    providers: [ContactListService]
})
export class ContactListModule {
}
