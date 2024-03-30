import { UUID } from "crypto";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "src/supplier/supplier.entity";

@Entity()

export class Purchase{

    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number

    @Column()
    description: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

    @Column()
    supplierId: UUID

    @ManyToOne(() => Supplier, supplier => supplier.purchases)
    supplier: Supplier

}