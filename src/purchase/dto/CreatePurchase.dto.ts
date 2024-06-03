import { UUID } from "crypto";

export class CreatePurchaseDto {
    total: number
    description: string
    supplierId: UUID
}