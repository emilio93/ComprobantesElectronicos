// Las referencias se utilizarán para los siguientes casos:
//  a)Nota de crédito que elimina un documento de referencia en forma completa.
//  b)Nota de débito que elimina una nota de crédito en la referencia en forma completa.
//  c)Notas de crédito o débito que corrigen montos de otro documento.
//  d)  Factura electrónica por contingencia, sustituyendo un comprobante provisional.
//  e) Cualquier documento relacionado con la factura electrónica.
//  Nota: Se puede incluir un máximo de 10 repeticiones de información de referencia

/**
 * Nombre:        Otros
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que agrupa varias definiciones de "Otros"
 */
export class Otros {
  /**
   * Nombre:        Otro Texto
   * Tipo:          String
   * Tamaño:        inf
   * Descripcion:   Elemento opcional que se puede utilizar para almacenar texto.
   */
  OtroTexto: string;

  /**
   * Nombre:        Otro Contenido
   * Tipo:          AnyOtherType
   * Tamaño:        inf
   * Descripcion:   Elemento opcional que se puede utilizar para almacenar contenido estructurado.
   */
  OtroContenido: string;

  constructor(otros) {
    if (otros === null) return;
    this.OtroTexto = otros?.OtroTexto?.[0];
    this.OtroContenido = otros?.OtroContenido?.[0];
  }
}
