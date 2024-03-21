import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Payment_State{

    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    state: string
}