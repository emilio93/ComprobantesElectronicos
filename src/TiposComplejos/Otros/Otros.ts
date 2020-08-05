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
 * Nombre:        Otros
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que agrupa varias definiciones de "Otros"
 */
export class Otros {
  /**
   * Nombre:        Otro Texto
   * Tipo:          String
   * Tamaño:        inf
   * Descripcion:   Elemento opcional que se puede utilizar para almacenar texto.
   */
  OtroTexto: string;

  /**
   * Nombre:        Otro Contenido
   * Tipo:          AnyOtherType
   * Tamaño:        inf
   * Descripcion:   Elemento opcional que se puede utilizar para almacenar contenido estructurado.
   */
  OtroContenido: string;
}
