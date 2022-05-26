import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'


@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column({ name: 'driver_license' })
    driverLicense: string;

    @Column({ name: 'is_admin', default: false })
    isAdmin: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id)
            this.id = uuidV4();
    }
}

export { User };