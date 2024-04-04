import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Payment{
     
    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number
}