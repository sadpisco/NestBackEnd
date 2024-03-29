import { UUID } from "crypto";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/location/location.entity";

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

    @Column()
    locationId: UUID

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

    @ManyToOne(() => Location, location => location.suppliers)
    location: Location


}