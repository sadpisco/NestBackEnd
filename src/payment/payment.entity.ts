import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Payment{
     
    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    total: number
}