import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}
