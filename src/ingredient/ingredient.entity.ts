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

    @Column()
    precioCompra: number

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    stock: number

    @Column()
    createdat: Date


}