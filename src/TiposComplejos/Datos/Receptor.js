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
 * Nombre:        Receptor del comprobante
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que contiene los datos del receptor del comprobante
 */
class Receptor extends Remisor {
  /**
   * Nombre:        Número de identificación en caso de que el receptor sea un extranjero
   * Tipo:          String
   * Tamaño:        20
   * Descripcion:   Este campo será  de condición obligatoria, cuando el cliente lo requiera
   */
  IdentificacionExtranjero = '';

  /**
   * Nombre:        Otras señas Extranjero
   * Tipo:          String
   * Tamaño:        300
   * Descripcion:   Campo para incluir la dirección en el extranjero, en caso de requerirlo.
   */
  OtrasSenasExtranjero = '';

}
