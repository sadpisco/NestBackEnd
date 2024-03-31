import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Platillo{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column({ unique: true })
    nombre: string
    
    @Column()
    description: string

    @Column({ type: 'numeric', precision: 10, scale: 1 })
    precio: number

    @Column()
    imagen: string

    @Column({ default: true})
    isActive: boolean
}