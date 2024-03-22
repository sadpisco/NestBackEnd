import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Platillo{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    nombre: string
    
    @Column()
    description: string

    @Column()
    precio: number

    @Column()
    imagen: string
}