import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "crypto";

@Entity()

export class Customer{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    nombres: string

    @Column()
    apellidos: string

    @Column()
    dni: number

    @Column()
    password: string

    @Column()
    edad: number

    @Column()
    dob: Date

    @Column()
    correo: string

    @Column()
    numero: number

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

}