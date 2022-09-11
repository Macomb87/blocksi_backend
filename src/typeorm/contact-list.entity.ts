import {BeforeUpdate, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique} from 'typeorm';
import {User} from "./user.entity";

@Entity('contact_list')
@Unique(["email", "owner"])
export class ContactList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'first_name',
        nullable: false,

    })
    firstName: string;

    @Column({
        name: 'last_name',
        nullable: false,
    })
    lastName: string;


    @Column({
        name: 'email_address',
        nullable: false,
    })
    email: string;


    @Column({
        name: 'phone',
        nullable: true,
        default: '',
    })
    phone: string;


    @Column({
        name: 'age',
        nullable: true,
        default: '',
    })
    age: string;

    @ManyToOne(() => User, (user: User) => user.contactList)
    owner: User

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated: Date;

    @BeforeUpdate()
    updateTimeStamp() {
        this.updated = new Date;
    }

    @Column({type: 'timestamp', nullable: true})
    deleted: Date;




}
