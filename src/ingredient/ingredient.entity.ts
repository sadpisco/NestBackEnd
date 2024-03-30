import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Ingredient{

    @PrimaryGeneratedColumn()
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


}