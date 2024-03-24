import { UUID } from "crypto";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Supplier } from "src/supplier/supplier.entity";

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