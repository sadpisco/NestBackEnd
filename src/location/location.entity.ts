import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Location{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    name:string

    @Column()
    description:string

    @Column()
    image:string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createat: Date

}