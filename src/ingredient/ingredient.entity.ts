import { UUID } from "crypto";
import { Purchase } from "src/purchase/purchase.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Ingredient{

    @PrimaryGeneratedColumn('uuid')
    id: UUID

    @Column()
    nombre: string

    @Column()
    unidad: string

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precioCompra: number

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    stock: number

    @Column()
    createdat: Date

    // @Column({ nullable: true})
    // purchases: Purchase[]


}