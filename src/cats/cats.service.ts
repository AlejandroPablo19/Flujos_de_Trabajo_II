import {Injectable} from '@nestjs/common';

/**
 * La interfaz Cat define la estructura de un objeto que representa a un gato.
 */
export interface Cat {
    id: number;
    name: string;
    genre: string;
    age: number;
    color: string;
    vaccinated: boolean;
    allergic: boolean;
}

@Injectable()

/**
 * CatService es una clase que se encarga de manejar la lógica de negocio relacionada con los gatos.
 * En este caso, se define un arreglo de gatos que simula una base de datos en memoria.
 * La clase puede contener métodos para crear, leer, actualizar y eliminar gatos, así como cualquier otra lógica relacionada con ellos.
 */
export class CatService{
    private cats: Cat[] = [
        {
            id:1,
            name: "Rudy",
            genre: "Macho",
            age: 5,
            color: "Naranja",
            vaccinated: true,
            allergic: false
        },{
            id:2,
            name: "Sylphie",
            genre: "Hembra",
            age: 5,
            color: "Blanco",
            vaccinated: false,
            allergic: true
        },{
            id:3,
            name: "Roxy",
            genre: "Hembra",
            age: 7,
            color: "Gris",
            vaccinated: true,
            allergic: false
        },
    ]

    

}