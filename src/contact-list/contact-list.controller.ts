import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import {ContactListService} from './contact-list.service';
import {ContactListInterface} from "./contact-list.interface";
import {ContactList} from "../typeorm";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";


@Controller('contact-list')
export class ContactListController {
    constructor(private readonly contactListService: ContactListService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createContact: ContactList): Promise<ContactList> {
        return this.contactListService.create(createContact);
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<ContactList[] | []> {
        return this.contactListService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('owner/:ownerId')
    findAllOwner(@Param('ownerId') ownerId: number): Promise<ContactList[] | []> {
        return this.contactListService.findAllOwner(ownerId);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() contactList: ContactListInterface)  {
        return this.contactListService.update(+id, contactList);
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.contactListService.remove(+id);
    }
}
