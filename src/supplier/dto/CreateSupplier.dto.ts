import { UUID } from "crypto"

export class CreateSupplierDto{
    name: string
    description? : string
    locationId: UUID
    
}