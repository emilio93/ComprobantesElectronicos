/**
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que contiene el detalle de una ubicación
 */
export class Ubicacion {
  /**
   * Nombre:        Provincia
   * Tipo:          String
   * Tamaño:        1
   * Descripcion:   Ver nota 14 y 7. Únicamente permite números.
   */
  Provincia: string;

  /**
   * Nombre:        Canton
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Ver nota 14 y 7. Únicamente permite números.
   */
  Canton: string;

  /**
   * Nombre:        Distrito
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Ver nota 14 y 7. Únicamente permite números.
   */
  Distrito: string;

  /**
   * Nombre:        Barrio
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Ver nota 14 y 7. Únicamente permite números.
   */
  Barrio: string;

  /**
   * Nombre:        Otras Señas
   * Tipo:          String
   * Tamaño:        250
   * Descripcion:   Debe de indicarse lo másexacta posible.
   */
  OtrasSenas: string;

  constructor(ubicacion) {
    if (ubicacion === null) return;
    this.Barrio = ubicacion?.Barrio?.[0];
    this.Canton = ubicacion?.Canton?.[0];
    this.Distrito = ubicacion?.Distrito?.[0];
    this.OtrasSenas = ubicacion?.OtrasSenas?.[0];
    this.Provincia = ubicacion?.Provincia?.[0];
  }
}
