import { UUID } from "crypto"

export class CreateLocationDto{
    name: string
    description: string
    image?: string
    cityId: UUID 
}