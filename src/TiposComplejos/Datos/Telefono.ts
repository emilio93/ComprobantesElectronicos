import { Telefonia } from './Telefonia'

/**
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo para un número telefónico. Es opcional.
 */
export class Telefono extends Telefonia {
  constructor(telefono) {
    super(telefono);
  }
}
