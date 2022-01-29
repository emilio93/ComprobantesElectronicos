export type InformacionReferenciaXML = {
  TipoDoc: Array<string>;
  Numero: Array<string>;
  FechaEmision: Array<string>;
  Codigo: Array<string>;
  Razon: Array<string>;
};

// Las referencias se utilizarán para los siguientes casos:
//  a) Nota de crédito que elimina un documento de referencia en forma completa.
//  b) Nota de débito que elimina una nota de crédito en la referencia en forma completa.
//  c) Notas de crédito o débito que corrigen montos de otro documento.
//  d) Factura electrónica por contingencia, sustituyendo un comprobante provisional.
//  e) Cualquier documento relacionado con la factura electrónica.
//  Nota: Se puede incluir un máximo de 10 repeticiones de información de referencia

/**
 * Nombre:        Información de Referencia
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que representa el detalle de la referencia.
 */
export class InformacionReferencia {
  /**
   * Nombre:        Tipo de documento de referencia
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 10 y 7
   */
  TipoDoc: string | undefined;
  // 10/ La codificación a utilizar en el campo “Tipo de documento de referencia” es la siguiente, sin embargo para efectos de impresión y visualización se debe mostrar la descripción del código:
  // Tipo de Documento Referencia                                                   Código
  // Factura electrónica                                                            01
  // Nota de débito electrónica                                                     02
  // Nota de crédito electrónica                                                    03
  // Tiquete electrónico                                                            04
  // Nota de despacho                                                               05
  // Contrato                                                                       06
  // Procedimiento                                                                  07
  // Comprobante emitido en contingencia                                            08
  // Devolución mercadería                                                          09
  // Sustituye factura rechazada por el Ministerio de Hacienda                      10
  // Sustituye factura rechazada por el Receptor del comprobante                    11
  // Sustituye Factura de exportación                                               12
  // *Facturación mes vencido                                                       13
  // Comprobante aportado por contribuyente del Régimende TributaciónSimplificado   14
  // Sustituye una Factura electrónica de Compra                                    15
  // Otros                                                                          99
  // Nota: * Dicho campo se puede utilizar en los comprobantes electrónicos únicamente cuando el servicio prestado vence el último día del mes, como por ejemplo servicios públicos, los cuales se facturan en los primeros días del mes, pero los ingresos pertenecen al mes anterior; En el campo “fecha de emisión del documento de referencia” del apartado de referencia de debe de indicar la fecha del periodo fiscal que correspondeel ingreso dela factura.
  // 7/ Para efectos de visualización e impresión se mostrará su descripción.

  /**
   * Nombre:        Clave numérica del comprobante electrónico o consecutivo del documento de referencia.
   * Tipo:          String
   * Tamaño:        50
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya  información  en  el  campo  “Tipo  de documento de referencia”, excepto cuando se utilice el código 13
   */
  Numero: string | undefined;

  /**
   * Nombre:        Fecha de emisión del documento de referencia.
   * Tipo:          DateTime
   * Tamaño:
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya  información  en  el  campo  “Tipo  de documento de referencia”
   */
  FechaEmision: string | undefined;

  /**
   * Nombre:        Código de referencia
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 9 y 7 Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de documento de referencia”, excepto cuando se utilice el código 13
   */
  Codigo: string | undefined;
  // 9/ Los códigos de referencia a utilizar son:
  // Descripción del campo                               Código
  // Anula Documento de Referencia                       01
  // Corrige monto                                       02
  // Referencia a otro documento                         04
  // Sustituye comprobante provisional por contingencia. 05
  // Otros                                               99
  // 7/ Para efectos de visualización e impresión se mostrará su descripción.

  /**
   * Nombre:        Razón de referencia
   * Tipo:          String
   * Tamaño:        180
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya  información  en  el  campo  “Tipo  de documento de referencia” excepto cuando se utilice el código 13
   */
  Razon: string | undefined;

  constructor(informacionReferencia: InformacionReferenciaXML) {
    if (!informacionReferencia) return;
    this.TipoDoc = informacionReferencia.TipoDoc?.[0];
    this.Numero = informacionReferencia.Numero?.[0];
    this.FechaEmision = informacionReferencia.FechaEmision?.[0];
    this.Codigo = informacionReferencia.Codigo?.[0];
    this.Razon = informacionReferencia.Razon?.[0];
  }
}
