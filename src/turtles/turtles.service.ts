import { Injectable } from "@nestjs/common";


export interface Turtle {
    id: number;
    name: string;
    genre: string;
    habitat: string;
    age: number;
}

@Injectable()
export class TurtleService{
    private turtles: Turtle[] =[
        {
            id:1,
            name:"Tobi",
            genre:"Macho",
            habitat:"Agua Dulce",
            age:12
        },{
            id:2,
            name:"Tito",
            genre:"Macho",
            habitat:"Terrestre",
            age:35
        },{
            id:3,
            name:"Haruna",
            genre:"Hembra",
            habitat:"Marina",
            age:50
        },
        
    ];

    //Método que devuelve la lista de las tortugas
    findAll(): Turtle[]{
        return this.turtles;
    }

    //Método para agregar una tortuga a la lista
    addTurtle(turtle: Turtle): Turtle {
        const newTurtle = {
            ...turtle};
        this.turtles.push(newTurtle)
        return newTurtle;
    }

    //Método para actualizar la lista de tortugas
    updateTurtle(id: number, turtles:Turtle): Turtle | string {
        const updateTurtle = this.turtles.find(t => t.id === id);
        if (!updateTurtle){
            return ("La tortuga con el ID: " + id + " no fue encontrada");
        }
        const turtleIndex = this.turtles.indexOf(updateTurtle);

        this.turtles[turtleIndex] = {...updateTurtle, ...turtles};
        return this.turtles[turtleIndex];
    }

    //Método para eliminar una tortuga mediante el ID
    deleteTurtle(id:number): string {
        const turtlesFound = this.turtles.find(turtle => turtle.id === id)
        if (!turtlesFound){
            return ("La tortuga con el ID: " + id + " no fue encontrada")
        }
        this.turtles = this.turtles.filter(turtle => turtle.id !== id);
        return ("La tortuga con el ID: " + id + " ha sido eliminada");
    }

    //Método para encontrar a una tortuga por su ID.
    getCat(id:number): Turtle | undefined{
        return this.turtles.find((item) => item.id === id);
    }
}