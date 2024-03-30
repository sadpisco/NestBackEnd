import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Recipe{
    
    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column({ unique: true})
    nombre: string

    @Column({ nullable: true})
    imagen: string

    @Column({ nullable: true})
    description: string

    @Column({ nullable: true})
    video: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdat: Date

}