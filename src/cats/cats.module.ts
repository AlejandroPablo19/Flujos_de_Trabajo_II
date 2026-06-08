import { Module } from "@nestjs/common";
import { CatService } from "./cats.service";
import { CatsController } from "./cats.cotroller";

/**
 * Actúa como un contenedor que agrupa los controladores y proveedores relacionados.
 */
@Module({
    /**
     * Proveedores inyectables que serán instanciados por el contenedor de NestJS
     * y que estarán disponibles dentro del contexto de este módulo.
     */
    providers: [CatService],

    /**
     * Controladores definidos en este módulo que se encargan de manejar 
     * las peticiones HTTP entrantes.
     */
    controllers: [CatsController]
})
export class CatsModule {}