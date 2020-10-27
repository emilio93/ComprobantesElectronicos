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
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que contiene el detalle de una ubicación
 */
export class Ubicacion {
  /**
   * Nombre:        Provincia
   * Tipo:          String
   * Tamaño:        1
   * Descripcion:   Ver nota 14 y 7. Únicamente permite números.
   */
  Provincia: string;

  /**
   * Nombre:        Canton
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Ver nota 14 y 7. Únicamente permite números.
   */
  Canton: string;

  /**
   * Nombre:        Distrito
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Ver nota 14 y 7. Únicamente permite números.
   */
  Distrito: string;

  /**
   * Nombre:        Barrio
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Ver nota 14 y 7. Únicamente permite números.
   */
  Barrio: string;

  /**
   * Nombre:        Otras Señas
   * Tipo:          String
   * Tamaño:        250
   * Descripcion:   Debe de indicarse lo másexacta posible.
   */
  OtrasSenas: string;

  constructor(ubicacion) {
    if (ubicacion === null) return;
    this.Barrio = ubicacion?.Barrio?.[0];
    this.Canton = ubicacion?.Canton?.[0];
    this.Distrito = ubicacion?.Distrito?.[0];
    this.OtrasSenas = ubicacion?.OtrasSenas?.[0];
    this.Provincia = ubicacion?.Provincia?.[0];
  }
}
