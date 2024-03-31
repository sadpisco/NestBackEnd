import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { Ingredient } from './ingredient.entity';
import { CreateIngredientDto } from './dto/CreateIngredient.dto';
import { UpdateIngredientDto } from './dto/UpdateIngredient.dto';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
export class IngredientController {
    constructor(private ingredientService: IngredientService){}

    @Post()
    createIngredient(@Body() newIngredient: CreateIngredientDto){
        return this.ingredientService.createIngredient(newIngredient);
    };

    @Get()
    getIngredients(){
        return this.ingredientService.getIngredients();
    };

    @Get(':id')
    getIngredient(@Param('id', ParseUUIDPipe) id: UUID){
        return this.ingredientService.getIngredient(id);
    };

    @Delete(':id')
    deleteIngredient(@Param('id', ParseUUIDPipe) id: UUID){
        return this.ingredientService.deleteIngredient(id);
    };

    @Put(':id')
    updateIngredient(@Param('id', ParseUUIDPipe) id: UUID, @Body() ingredient: UpdateIngredientDto){
        return this.ingredientService.updateIngredient(id, ingredient);
    };
};
