// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

export class OtrosCargos {
  /**
   * Nombre:        Tipo de documento
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Ver nota 16
   */
  TipoDocumento = 1;

  /**
   * Nombre:        Número de cédula física/ jurídica/NITE/DIMEX del emisor
   * Tipo:          String
   * Tamaño:        12
   * Descripcion:   Este campo será de condición  obligatoria, cuando se seleccione en “tipo de documento” el código 04.
   *                Cuando seleccione 04 en tipo de documento y no se cuente con una línea de servicio o producto, no es obligatorio usar la parte b)  Detalle  de  la  mercancía  o servicio prestado.
   *                El (5) tercero debe de estar inscrito como contribuyente.
   *                Formato:
   *                La “Cédula física” debe de contener 9 dígitos, sin cero al inicio y sin guiones La “cédula de personas Jurídicas” debe contener 10 dígitos y sin guiones
   *                El “Documento de Identificación Migratorio para Extranjeros (DIMEX)” debe contener 11 o 12 dígitos, sin ceros al inicio y sin guiones
   *                El “Documento de Identificación de la DGT (NITE)” debe contener 10 dígitos y sin guiones.
   *
   * Footnote:       5 Se entenderá como tercero el contribuyente que vende o presta el servicio o mercancía que se está cobrando.
   */
  NumeroIdentidadTercero = 1;

  /**
   * Nombre:        Nombre o razón social del Receptor
   * Tipo:          String
   * Tamaño:        100
   * Descripcion:   Este campo será de condición obligatoria, cuando se seleccione en “tipo de documento” el código 04.
   */
  NombreTercero: string;

  /**
   * Nombre:        Detalle de otros Cargos.
   * Tipo:          String
   * Tamaño:        160
   * Descripcion:   Se debe de indicar la descripción del cargo.
   */
  Detalle: string;

  /**
   * Nombre:        Porcentaje
   * Tipo:          Decimal
   * Tamaño:        9,5
   * Descripcion:   En el caso que el cargo posea un porcentaje o monto para su cálculo se debe de indicar el mismo.
   */
  Porcentaje : number;

  /**
   * Nombre:        Monto del cargo
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Monto total del cargo.
   */
  MontoCargo  : number;
}
