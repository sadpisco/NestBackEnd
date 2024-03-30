import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Product{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    nombre: string

    @Column()
    marca:string

    @Column()
    precio: number

    @Column()
    stock: number

    @Column()
    unidad: string

}