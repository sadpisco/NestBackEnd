import { UUID } from "crypto";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Supplier } from "src/supplier/supplier.entity";

@Entity()

export class Location{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column({ unique: true})
    name:string

    @Column({nullable: true})
    description:string

    @Column({default: 'https://static.vecteezy.com/system/resources/previews/006/711/127/non_2x/location-not-found-icon-gps-with-question-mark-sign-symbol-vector.jpg'})
    image:string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createat: Date

}