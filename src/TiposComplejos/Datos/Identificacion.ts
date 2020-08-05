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
 * Descripcion:   Tipo complejo que contiene los datos de identificación de un emisor o receptor
 */
export class Identificacion {

  /**
   * Nombre:        Tipo de identificación
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones.Este campo será  de condición obligatoria, cuando se posea información en el nodo “Número de cédula física/ jurídica/NITE/DIMEX receptor
   *                Ver nota 4
   */
  Tipo: string;

  /**
   * Nombre:        Número de cédula física/ jurídica/NITE/DIMEX del receptor
   * Tipo:          String
   * Tamaño:        12
   * Descripcion:   Este campo será  de condición obligatoria, cuando se posea información en el nodo “Tipo de identificación del receptor.
   *                Formato:
   *                  La “Cédula física” debe de contener 9 dígitos, sin cero al inicio y sin guiones
   *                  La  “cédula de personas Jurídicas”  debe contener 10 dígitos y sin guiones
   *                  El  “Documento de Identificación Migratorio para Extranjeros (DIMEX)” debe contener 11 o 12 dígitos, sin ceros al inicio y sin guiones
   *                  El  “Documento de Identificación de la DGT  (NITE)” debe contener 10 dígitos y sin guiones.
   */
  Numero : string;
}
