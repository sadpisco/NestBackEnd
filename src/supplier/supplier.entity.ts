import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Supplier {

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    name:string

    @Column()
    description:string

    @Column()
    number: number

    @Column()
    email:string

    @Column()
    direccion: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date


}