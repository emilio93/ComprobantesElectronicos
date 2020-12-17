// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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
  TipoDoc: string;
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
  Numero: string;

  /**
   * Nombre:        Fecha de emisión del documento de referencia.
   * Tipo:          DateTime
   * Tamaño:
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya  información  en  el  campo  “Tipo  de documento de referencia”
   */
  FechaEmision: string;

  /**
   * Nombre:        Código de referencia
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 9 y 7 Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de documento de referencia”, excepto cuando se utilice el código 13
   */
  Codigo: string;
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
  Razon: string;

  constructor(informacionReferencia) {
    if (informacionReferencia === null) return;
    this.TipoDoc = informacionReferencia?.TipoDoc?.[0];
    this.Numero = informacionReferencia?.Numero?.[0];
    this.FechaEmision = informacionReferencia?.FechaEmision?.[0];
    this.Codigo = informacionReferencia?.Codigo?.[0];
    this.Razon = informacionReferencia?.Razon?.[0];
  }
}
