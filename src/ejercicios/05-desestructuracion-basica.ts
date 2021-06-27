/* ===== Código de TypeScript ===== */

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    autor: 'Edd Sheeran',
    anio: 2015
  }
}

/* ===== Destructuración de Objetos ===== */
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// const { volumen, segundo, cancion, detalles: { autor } } = reproductor; */

/* = console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('El autor actual es: ', autor); */


/* ===== Destructuración de Arreglos ===== */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', p3);