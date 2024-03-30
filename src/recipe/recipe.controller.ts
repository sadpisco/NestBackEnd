import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.entity';
import { UpdateRecipeDto } from './dto/UpdateRecipe.dto';
import { CreateRecipeDto } from './dto/CreateRecipe.dto';


@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService){}

    @Post()
    createRecipe(@Body() newRecipe: CreateRecipeDto){
        return this.recipeService.createRecipe(newRecipe);
    };

    @Get()
    getRecipes():Promise <Recipe[]>{
        return this.recipeService.getRecipes();
    };

    @Get(':id')
    getRecipe(@Param('id', ParseUUIDPipe) id: UUID){
        return this.recipeService.getRecipe(id);
    };

    @Delete(':id')
    deleteRecipe(@Param('id', ParseUUIDPipe) id: UUID){
        return this.recipeService.deleteRecipe(id);
    };

    @Put(':id')
    updateRecipe(@Param('id', ParseUUIDPipe) id: UUID, @Body() recipe: UpdateRecipeDto){
        return this.recipeService.updateRecipe(id, recipe);
    };
};

