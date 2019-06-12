export class Serie {
    
    constructor(id = -1, nombre = '', puntaje = 0, probabilidades = 0){
        this.id = id;
        this.nombre = nombre;
        this.puntaje = puntaje;
        this.sorteos = 0;
        this.probabilidades = probabilidades;
    }

    id: number;
    nombre: string;
    puntaje: number;
    sorteos: number;
    probabilidades: number;
}
