/*
 * En este archivo se define la interfaz, donde se utiliza para crear un nuevo gato. 
 */
export interface CreateCatDto {
    id: number;
    name: string;
    genre: string;
    age: number;
    color: string;
    vaccinated: boolean;
    allergic: boolean;
}