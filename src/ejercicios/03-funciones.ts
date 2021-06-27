/* ===== Código de TypeScript ===== */
function sumar(a: number, b: number) {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
}

/* const resultado = sumar(10,20);
console.log(resultado); */


function multiplicar(number: number, otroNumber?: number, base: number = 2): number {
  return number * base;
}

/* const resultadoMultiplicar = multiplicar(5, 0, 10);
console.log(resultadoMultiplicar); */


interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
  //console.log(personaje);
}

const newPersonaje: PersonajeLOR = {
  nombre: 'Strider',
  pv: 50,
  mostrarHp() {
    console.log('Puntos de vida: ', this.pv);
  }
}

curar(newPersonaje, 20);
newPersonaje.mostrarHp();