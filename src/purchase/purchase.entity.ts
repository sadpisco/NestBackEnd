import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Purchase{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    total: number

    @Column()
    description: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

}