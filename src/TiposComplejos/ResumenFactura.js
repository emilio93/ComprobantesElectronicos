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
   * Nombre:        Resumen de la Factura
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Códigoy     Tipo     de Moneda
   */
class ResumenFactura {

  /**
   * Nombre:        Emisor del comprobante
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo de dato de fecha y hora, basado en el estándar RFC3339 sección 5.6, tipo “date-time”.Formato: YYYY-MM-DDThh:mi:ss[Z|(+|-)hh:mm]Ejemplo: 2016-09-26T13:00:00+06:00
   */
  CodigoTipoMoneda = null;

  /**
   * Nombre:        Tipo de identificación del emisor
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones.Este campo será  de condición obligatoria, cuando se posea información en el nodo “Número de cédula física/ jurídica/NITE/DIMEX emisorVer nota 4
   */
  Numero = '';
}
