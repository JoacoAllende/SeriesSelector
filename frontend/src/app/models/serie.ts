export class Serie {
    
    constructor(id = -1, nombre = '', puntaje = 1){
        this.id = id;
        this.nombre = nombre;
    }

    id: number;
    nombre: string;
    puntaje: number;
}
