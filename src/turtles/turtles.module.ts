import { Module } from "@nestjs/common";
import { TurtleService } from "./turtles.service";
import { TurtlesController } from "./turtles.controllers";

@Module({
    providers: [TurtleService],
    controllers: [TurtlesController]
})
export class TurtlesModule{}