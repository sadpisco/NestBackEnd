import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Payment_Type {
    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    type: string
}