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
//  a)Nota de crédito que elimina un documento de referencia en forma completa.
//  b)Nota de débito que elimina una nota de crédito en la referencia en forma completa.
//  c)Notas de crédito o débito que corrigen montos de otro documento.
//  d)  Factura electrónica por contingencia, sustituyendo un comprobante provisional.
//  e) Cualquier documento relacionado con la factura electrónica.
//  Nota: Se puede incluir un máximo de 10 repeticiones de información de referencia

/**
 * Nombre:        Información de Referencia
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que representa el detalle de la referencia.
 */
class InformacionReferencia {
  /**
   * Nombre:        Tipo de documento de referencia
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 10 y 7
   */
  TipoDoc = '';

  /**
   * Nombre:        Clave numérica del comprobante electrónico o consecutivo del documento de referencia.
   * Tipo:          String
   * Tamaño:        50
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya  información  en  el  campo  “Tipo  de documento de referencia”, exceptocuando se utilice el código 13
   */
  Numero = '';

  /**
   * Nombre:        Fecha de emisión del documento de referencia.
   * Tipo:          DateTime
   * Tamaño:
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya  información  en  el  campo  “Tipo  de documento de referencia”
   */
  FechaEmision = '';

  /**
   * Nombre:        Código de referencia
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 9 y 7 Este campo será de condiciónobligatoria, cuando se incluya información en el campo “Tipo de documento de referencia”, exceptocuando se utilice el código 13
   */
  Codigo = '';

  /**
   * Nombre:        Razón de referencia
   * Tipo:          String
   * Tamaño:        180
   * Descripcion:   Este campo será de condición obligatoria, cuando seincluya  información  en  el  campo  “Tipo  de documento de referencia” excepto cuando se utilice el código 13
   */
  Razon = '';
}
