import { Injectable, HttpException } from '@nestjs/common';
import { Recipe } from './recipe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecipeDto } from './dto/CreateRecipe.dto';
import { UpdateRecipeDto } from './dto/UpdateRecipe.dto';
import { UUID } from 'crypto';


@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(Recipe) private recipeRepository: Repository <Recipe>,
    ){}

    async createRecipe (recipe: CreateRecipeDto){
        const verifyRepeated = await this.recipeRepository.findOne({
            where: {
                nombre: recipe.nombre
            }
        });

        if(verifyRepeated){
            throw new HttpException("Receta ya existente.", 400);
        } else {
            const newRecipe = this.recipeRepository.create(recipe);
            return this.recipeRepository.save(newRecipe);
        };
    };

    getRecipes(){
        return this.recipeRepository.find();
    };

    async getRecipe(id: UUID){
        const recipeFound = await this.recipeRepository.findOne({
            where: {
                id: id
            }
        });

        if(recipeFound) {
            return recipeFound;
        } else {
            throw new HttpException('Receta no encontrada.',400);
        };
    };

    async deleteRecipe(id:UUID){
        const verifyRecipe = await this.recipeRepository.findOne({
            where: {
                id: id
            }
        });

        if (verifyRecipe){
            return this.recipeRepository.delete({id: id});
        } else {
            throw new HttpException('Receta a borrar no encontrada.', 400);
        };
    };

    async updateRecipe(id: UUID, recipe: UpdateRecipeDto){
        const verifyingRecipe = this.recipeRepository.findOne({
            where: {
                id: id
            }
        });

        if (verifyingRecipe){
            return this.recipeRepository.update({id}, recipe);
        } else {
            throw new HttpException('Receta a actualizar no encontrada.', 400);
        };
    };
}
