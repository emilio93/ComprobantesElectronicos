// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * Nombre:        Información de exoneración
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo con detalles de la exoneración.
 *                Este campo será de condición obligatoria cuando la venta tenga alguna exoneración.
 */
class Exoneración {
  /**
   * Nombre:        Tipo de documento de exoneración o de autorización.
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 10.1 y 7
   */
  Tipodocumento = '';

  /**
   * Nombre:        Número de documento de exoneración o de autorización
   * Tipo:          String
   * Tamaño:        40
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de documento de exoneración o de autorización”
   *                Debe de indicarse tal y como se encuentra en el documento otorgado por la institución incluyendo los guiones.
   */
  NumeroDocumento = '';

  /**
   * Nombre:        Nombre  de  institución  o dependencia  que  emitió la exoneración
   * Tipo:          String
   * Tamaño:        160
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de documento de exoneración o de autorización”
   */
  NombreInstitucion = '';

  /**
   * Nombre:        Fecha de emisión del documento de exoneración o de autorización
   * Tipo:          DateTime
   * Tamaño:
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de documento de exoneración o de autorización”.
   *                Tipo de dato de fecha y hora, basado en  el  estándar RFC3339 sección 5.6, tipo “date-time”.Formato: YYYY-MM-DDThh:mi:ss[Z|(+|-)hh:mm]Ejemplo: 2016-09-26T13:00:00+06:00
   */
  FechaEmision = '';

  /**
   * Nombre:        Porcentaje de la Exoneración
   * Tipo:          Integer
   * Tamaño:        3
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de exoneración”.
   *                Debe de indicarse el porcentaje otorgado de exoneración.
   */
  PorcentajeExoneracion = '';

  /**
   * Nombre:        Monto del Impuesto Exonerado
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de exoneración”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   *                Dicho monto se obtiene de la multiplicación del campo “porcentaje de la exoneración” por el campo “Monto del Impuesto”.
   * Footnote:      4 Apartir del 01 de julio del 2020 la fórmulade cálculodel campo denominado “Monto de Impuesto exonerado” se modifica de la siguiente manera“Se obtiene de la multiplicación del campo “porcentaje de la exoneración” por el campo “Subtotal”.
   */
  MontoExoneracion = '';

  /**
   * Nombre:        Información de exoneración
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo con detalles de la exoneración.
   *                Este campo será de condición obligatoria cuando la venta tenga alguna exoneración.
   */
  Exoneración = null;
}
