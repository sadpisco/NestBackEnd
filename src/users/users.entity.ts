import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true})
    username: string

    @Column()
    password: string

    @Column({nullable: true})
    nombres: string

    @Column({nullable: true})
    apellidos: string

    @Column({nullable: true})
    edad: number

    @Column({nullable: true})
    dni: number

    @Column({nullable: true})
    number: number

    @Column({nullable: true})
    email: string

    @Column({nullable: true})
    direccion: string

    @Column({nullable: true})
    redes: string

    @Column({nullable: true})
    fechaIngreso: Date

    @Column({nullable: true})
    fechaEgreso: Date

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

    @Column({nullable: true})
    authProvider: string

}

