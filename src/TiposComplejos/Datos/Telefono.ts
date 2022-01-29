import { Telefonia, TelefoniaXML } from "./Telefonia";

/**
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo para un número telefónico. Es opcional.
 */
export class Telefono extends Telefonia {
  constructor(telefono: TelefoniaXML) {
    super(telefono);
  }
}
