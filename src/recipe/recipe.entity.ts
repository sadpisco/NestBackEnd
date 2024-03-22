import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Recipe{
    @PrimaryGeneratedColumn()

    id: UUID

    @Column()
    nombre: string

    @Column()
    imagen: string

    @Column()
    description: string

    @Column()
    video: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

}