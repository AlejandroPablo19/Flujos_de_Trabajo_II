import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Turtle, TurtleService } from "./turtles.service";
import { CreateTurtleDTO } from "./dtos/create-turtle.dto";
import { UpdateCatDTO } from "./dtos/update-turtle.dto";

@Controller('turtles')
export class TurtlesController{
    constructor(
        private readonly turtlesService : TurtleService
    ){}

    @Get()
    findAll(): Turtle[]{
        return this.turtlesService.findAll();
    }

    @Post()
    addCat(@Body() newRegister : CreateTurtleDTO){
        return this.turtlesService.addTurtle(newRegister as Turtle);
    }

    @Put(':id')
    updateTurtle(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateTurtle : UpdateCatDTO
    ){
        return this.turtlesService.updateTurtle(id, updateTurtle as Turtle);
    }

    @Delete(':id')
    deleteTurtle(@Param('id', ParseIntPipe) id : number){
        return this.turtlesService.deleteTurtle(id);
    }

    @Get(':id')
    getTurtle(@Param('id', ParseIntPipe) id : number){
        return this.turtlesService.getCat(id);
    }
}