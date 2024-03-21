import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Order{

    @PrimaryGeneratedColumn()
    id: UUID

    @Column()
    total: number

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

    @Column()
    description: string

}