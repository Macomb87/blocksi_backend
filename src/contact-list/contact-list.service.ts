import {Injectable} from '@nestjs/common';

import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ContactList} from "../typeorm";
import {ContactListInterface} from "./contact-list.interface";

@Injectable()
export class ContactListService {

    constructor(@InjectRepository(ContactList) private readonly contactListRepository: Repository<ContactList>) {
    }

    create(contact: ContactList): Promise<ContactList> {
        return this.contactListRepository.save(this.contactListRepository.create(contact));
    }

    findAll(): Promise<ContactList[] | undefined> {
        return this.contactListRepository.find();
    }

    async findAllOwner(ownerId): Promise<ContactList[] | undefined> {
        return this.contactListRepository
            .createQueryBuilder("contactList")
            .leftJoinAndSelect("contactList.owner", "*")
            .where("contactList.owner = :ownerId")
            .andWhere('contactList.deleted IS NULL')
            .setParameters({ownerId: ownerId})
            .select(['contactList.firstName', 'contactList.lastName', 'contactList.age', 'contactList.email', 'contactList.id', 'contactList.phone'])
            .getMany()
    }

    async update(id: number, contact: ContactListInterface): Promise<ContactList | undefined> {
        await this.contactListRepository.update({id: id},
            {
                ...(contact.firstName && {firstName: contact.firstName}),
                ...(contact.lastName && {lastName: contact.lastName}),
                ...(contact.age && {age: contact.age}),
                ...(contact.phone && {phone: contact.phone}),
                ...(contact.email && {email: contact.email})
            });

        return this.contactListRepository.findOneBy({id: id});

    }

    async remove(id: number) {
        return this.contactListRepository.update({id: id},
            {
                deleted: new Date
            });

    }
}
