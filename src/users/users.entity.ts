import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class User {

    @PrimaryGeneratedColumn("uuid") // Use "uuid" type for primary key
    id: UUID; // Change type to string

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
    numero: number

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

    @Column({default: true})
    isActive: boolean

}

