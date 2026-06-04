/*
 * Este archivo define la interfaz, que se utilizara para actualizar la información de un gato existente. 
 */
export interface UpdateCatDto {
    name: string;
    genre: string;
    age: number;
    color: string;
    vaccinated: boolean;
    allergic: boolean;
}