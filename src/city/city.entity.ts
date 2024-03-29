import { UUID } from "crypto";
import { Location } from "src/location/location.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()

export class City{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column({ unique: true})
    name: string

    @Column({nullable: true})
    description: string

    @Column({nullable: true})
    departamento: string

    @OneToMany(() => Location, Location => Location.city)
    locations: Location[]
}