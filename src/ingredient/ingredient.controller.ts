import { Controller, Post, Body, Get, Param, ParseIntPipe, ParseUUIDPipe, Delete, Patch, Put } from '@nestjs/common';
import { UUID } from 'crypto';
import { Ingredient } from './ingredient.entity';
import { CreateIngredientDto } from './dto/CreateIngredient.dto';
import { UpdateIngredientDto } from './dto/UpdateIngredient.dto';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
export class IngredientController {
    constructor(private ingredientService: IngredientService){}

}
