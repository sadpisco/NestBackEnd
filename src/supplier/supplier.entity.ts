import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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


}