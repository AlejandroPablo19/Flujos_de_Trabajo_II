/*
 * Este archivo define la interfaz, 
que se utilizara para actualizar 
la información de un gato existente. 
 */
export class UpdateCatDto {
    name?: string;
    genre?: string;
    age?: number;
    color?: string;
    vaccinated?: boolean;
    allergic?: boolean;
}