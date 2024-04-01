import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Order_State{
    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    state: string
}