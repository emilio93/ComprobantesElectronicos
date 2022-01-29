import { Telefonia, TelefoniaXML } from "./Telefonia";

/**
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo para un número de fax. Es opcional.
 */
export class Fax extends Telefonia {
  constructor(fax: TelefoniaXML) {
    super(fax);
  }
}
