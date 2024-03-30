import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Ingredient } from './ingredient.entity';
import { CreateIngredientDto } from './dto/CreateIngredient.dto';
import { UpdateIngredientDto } from './dto/UpdateIngredient.dto';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {
    constructor(@InjectRepository(Ingredient) private ingredientRepository: Repository <Ingredient>,
    ){}

    async createIngredient(ingredient: CreateIngredientDto){
        const verifyIngredient = await this.ingredientRepository.findOne({
            where: {
                nombre: ingredient.nombre
            }
        });

        if (verifyIngredient){
            throw new HttpException('Nombre del Ingrediente a crear ya existe.',400);
        } else {
            const createNewIngredient = this.ingredientRepository.create(ingredient);
            return this.ingredientRepository.save(createNewIngredient);
        };
    };

    getIngredients(){
        return this.ingredientRepository.find();
    };

    async getIngredient(id: UUID){
        const foundIngredient = await this.ingredientRepository.findOne({
            where: {
                id: id
            }
        });

        if(foundIngredient){
            return foundIngredient;
        } else {
            throw new HttpException('Ingrediente buscado no encontrado por ID.',400);
        }
    };

    async deleteIngredient(id: UUID){
        const ingredientFound = await this.ingredientRepository.findOne({
            where: {
                id: id
            }
        });

        if(ingredientFound){
            return this.ingredientRepository.delete({id: id});
        } else {
            throw new HttpException('Ingrediente a borrar no encontrado.' , 400);
        }
    };

    async updateIngredient(id: UUID, ingredient: UpdateIngredientDto){
        const verificarIngrediente = await this.ingredientRepository.findOne({
            where: {
                id: id
            }
        });

        if (verificarIngrediente){
            return this.ingredientRepository.update({id}, ingredient)
        } else {
            throw new HttpException('Ingrediente a actualizar no encontrado por ID.', 400);
        };
    };
};
