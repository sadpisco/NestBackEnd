import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class City{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column({ unique: true})
    name: string

    @Column({nullable: true})
    description: string

    @Column({nullable: true})
    departamento: string
}