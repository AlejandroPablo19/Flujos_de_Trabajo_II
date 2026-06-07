import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete } from "@nestjs/common";
import { CatService, Cat } from "./cats.service";
import { CreateCatDto } from "./dtos/create-cat.dto";
import { UpdateCatDto } from "./dtos/update-cat.dto";

/**
 * Controlador encargado de gestionar las peticiones HTTP para el recurso 'cats'.
 * Define los endpoints del CRUD para los gatos.
 */
@Controller('cats')
export class CatsController {
    
    /**
     * Inyecta el servicio CatService para interactuar con la lógica de negocio.
     * @param catsService Servicio que maneja los datos de los gatos.
     */
    constructor(
        private readonly catsService: CatService
    ) {}

    /**
     * Obtiene la lista completa de gatos.
     * @route GET /cats
     * @returns {Cat[]} Un arreglo con todos los objetos Cat registrados.
     */
    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    /**
     * Crea un nuevo registro de gato.
     * @route POST /cats
     * @param {CreateCatDto} newRegister Datos de la solicitud para crear el gato.
     * @returns El objeto del gato recién creado.
     */
    @Post()
    addCat(@Body() newRegister: CreateCatDto) {
        // Se realiza un cast 'as Cat' para asegurar la compatibilidad con el servicio
        return this.catsService.addCat(newRegister as Cat);
    }

    /**
     * Actualiza los datos de un gato existente mediante su ID.
     * @route PUT /cats/:id
     * @param {number} id Identificador único del gato (transformado a número por ParseIntPipe).
     * @param {UpdateCatDto} updateCat Datos parciales o completos a actualizar.
     * @returns El objeto del gato actualizado.
     */
    @Put(':id')
    updateCat(
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateCat: UpdateCatDto
    ) {
        return this.catsService.updateCat(id, updateCat as Cat);
    }

    /**
     * Elimina un gato del sistema mediante su ID.
     * @route DELETE /cats/:id
     * @param {number} id Identificador único del gato a eliminar.
     * @returns Un indicador de éxito o el objeto eliminado, dependiendo del servicio.
     */
    @Delete(':id')
    deleteCat(@Param('id', ParseIntPipe) id: number) {
        return this.catsService.deleteCat(id);
    }

    /**
     * Obtiene los detalles de un gato específico mediante su ID.
     * @route GET /cats/:id
     * @param {number} id Identificador único del gato a buscar.
     * @returns {Cat | undefined} El objeto del gato encontrado o undefined si no existe.
     */
    @Get(':id')
    getCat(@Param('id', ParseIntPipe) id: number) {
        return this.catsService.getCat(id);
    }
}