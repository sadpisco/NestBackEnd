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

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio: number

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    stock: number

    @Column()
    unidad: string

}