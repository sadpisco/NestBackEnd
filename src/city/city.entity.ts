import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class City{

    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    departamento: string
}