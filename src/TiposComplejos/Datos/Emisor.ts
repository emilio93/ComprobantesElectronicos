import { Remisor } from './Remisor'

/**
 * Nombre:        Emisor del comprobante
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que contiene los datos del emisor del comprobante
 */
export class Emisor extends Remisor {
  constructor(emisor) {
    super(emisor);
  }
}
