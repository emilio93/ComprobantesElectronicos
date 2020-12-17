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
 * Nombre:        CodigoComercial
 * Tipo:          String
 * Tamaño:        2
 * Descripcion:   Tipo complejo para el código de un producto o servicio.
 *                Se puede incluir un máximo de 5 repeticiones de códigos de producto/servicio.
 */
export class CodigoComercial {
  /**
   * Nombre:        Tipo de Código de producto/servicio
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 12
   */
  Tipo: string;
  // 12/ La codificación a utilizar en el campo “Tipo de Código de producto/servicio” es la siguiente, sin embargo para efectos deimpresión y visualización se debe mostrar la descripción del nombre:
  // Tipo de Código  de producto/servicio          Código
  // Código del producto del vendedor              01
  // Código del producto del comprador             02
  // Código del producto asignado por la industria 03
  // Código uso interno                            04
  // Otros                                         99

  /**
   * Nombre:        Código
   * Tipo:          String
   * Tamaño:        20
   * Descripcion:
   */
  Codigo: string;

  constructor(codigoComercial) {
    if (codigoComercial === null) return;
    this.Tipo = codigoComercial?.Tipo?.[0];
    this.Codigo = codigoComercial?.Codigo?.[0];
  }
}
