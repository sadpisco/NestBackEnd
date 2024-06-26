import { UUID } from "crypto";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Supplier } from "src/supplier/supplier.entity";
import { City } from "src/city/city.entity";

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

    @Column({nullable: false})
    cityId: UUID

    @ManyToOne( () => City, City => City.locations)
    city: City

    @OneToMany( () => Supplier, Supplier => Supplier.location)
    suppliers: Supplier[]

}