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
 * Nombre:        Código y Tipo de Moneda
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Se convierte en obligatorio cuando el comprobante electrónico se exprese en moneda extranjera.
 */
class CodigoTipoMoneda {
  /**
   * Nombre:        Código de la moneda.
   * Tipo:          String
   * Tamaño:        3
   * Descripcion:   Ver nota 13 y nota 13.1
   */
  CodigoMoneda = '';

  /**
   * Nombre:        Tipo de cambio
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TipoCambio = 0;
}
