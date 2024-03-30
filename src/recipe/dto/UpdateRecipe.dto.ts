import { UUID } from "crypto";

export class UpdateRecipeDto {
    nombre?:string
    imagen?:string
    description?: string
    video? :string
}