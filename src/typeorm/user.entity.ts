import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {ContactList} from "./contact-list.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'first_name',
        nullable: false,
        default: '',
    })
    firstName: string;

    @Column({
        name: 'last_name',
        nullable: false,
        default: '',
    })
    lastName: string;

    @Column({
        name: 'email_address',
        unique: true,
        nullable: false,
        default: '',
    })
    email: string;

    @Column({
        nullable: false,
        default: '',
    })
    password: string;


    @OneToMany(() => ContactList, (contactList: ContactList) => contactList.owner)
    contactList: ContactList[]

}
