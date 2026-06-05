/*
 * En este archivo se define la interfaz, 
donde se utiliza para crear un nuevo gato. 
 */
export class CreateCatDto {
    name?: string;
    genre?: string;
    age?: number;
    color?: string;
    vaccinated?: boolean;
    allergic?: boolean;
}