class Persona {
  readonly nombre: string;
  readonly apellido: string;
  private edad: number;
  private colorDePelo: string;
  constructor(
    nombre: string,
    apellido: string,
    colorDePelo: string,
    edad: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.colorDePelo = colorDePelo;
    this.edad = edad;
  }
  get Nombre(): string {
    return this.nombre;
  }
  get Apellido(): string {
    return this.Apellido;
  }
  get ColorDePelo(): string {
    return this.colorDePelo;
  }

  public mostrarNombre(): string {
    return this.Nombre + this.Apellido;
  }
}
