import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true})
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

    @Column({nullable: true})
    authProvider: string

}

