import { UUID } from "crypto";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/location/location.entity";
import { Purchase } from "src/purchase/purchase.entity";

@Entity()

export class Supplier {

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    name:string

    @Column({ nullable: true})
    description:string

    @Column({ nullable: true})
    number: number

    @Column({ nullable: true})
    email:string

    @Column({ nullable: true})
    direccion: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

    @Column()
    locationId: UUID

    @ManyToOne(() => Location, location => location.suppliers)
    location: Location

    @OneToMany(() => Purchase, purchase => purchase.supplier)
    purchases: Purchase[]
}