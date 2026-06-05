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
    ];

    /**
     * 
     * @returns Metodo que devuelve el arreglo de datos 
     */
    findAll(): Cat[]{
        return this.cats;
    }

    /**
     * 
     * @param cat metodo que agrega un nuevo gato al arreglo
     * @returns 
     */
    addCat(cat: Cat): Cat{
        const newCat = {
            ...cat};
            this.cats.push(newCat);
            return newCat;
    }

    /**
    * @param metodo para actualizar la lista de gatos.
    */
    updateCat(id: number, cats: Cat): Cat | string {
        const updateCat = this.cats.find(c => c.id === id);
        if (!updateCat){
            return 'Gato con el ID: ${id} no fue encontrado';
        }
        const catIndex = this.cats.indexOf(updateCat);

        this.cats[catIndex] = {...updateCat, ...cats};
        return this.cats[catIndex];
    }

    /**
     * @param metodo para eliminar un gato.
     */
    deleteCat(id:number): string{
        const catsFound = this.cats.find(cat => cat.id === id);
        if (!catsFound){
            return 'Gato con el ID: ${id} no fue encontrado';
        }
        this.cats = this.cats.filter(cat => cat.id !== id);
        return 'Gato con el ID: ${id} ha sido eliminado';
    }

    /**
     * @param metodo para encontrar un gato por su ID.
     */
    getCat(id:number): Cat | undefined{
        return this.cats.find((item) => item.id === id);
    }
}