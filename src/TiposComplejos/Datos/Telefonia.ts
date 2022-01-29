export type TelefoniaXML = {
  CodigoPais: Array<number>;
  NumTelefono: Array<number>;
};

/**
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo para un número telefónico, fax u otros similares.
 */
export class Telefonia {
  /**
   * Nombre:        Código del País
   * Tipo:          Integer
   * Tamaño:        3
   * Descripcion:   En el caso que se cuente con un número de teléfono debe indicarse.
   */
  CodigoPais?: number;

  /**
   * Nombre:        Número telefónico
   * Tipo:          Integer
   * Tamaño:        20
   * Descripcion:   En el caso que se cuente con un número de teléfono debe indicarse.
   */
  NumTelefono?: number;

  constructor(telefonia: TelefoniaXML) {
    if (!telefonia) return;
    this.CodigoPais = telefonia?.CodigoPais?.[0];
    this.NumTelefono = telefonia?.NumTelefono?.[0];
  }
}
