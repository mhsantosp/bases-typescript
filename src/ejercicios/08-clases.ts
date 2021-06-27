/* ===== Código de TypeScript ===== */

class PersonaNormal {
  constructor(
    public nombre: string,
    public direccion: string,
  ) { }
}

class Heroe extends PersonaNormal {
  /* private */ // alterEgo: string;
  /* public */ // edad: number;
  /* static */ // nombreReal: number

  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'New York, USA');
  }
}

const iroMan = new Heroe('Iroman', 45, 'Tony');
console.log(iroMan);