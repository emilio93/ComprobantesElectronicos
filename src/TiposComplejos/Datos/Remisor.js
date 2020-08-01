// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const Identificacion = require('TiposComplejos/Identificacion');
const Ubicacion = require('TiposComplejos/Ubicacion');
const Telefono = require('TiposComplejos/Telefono');
const Fax = require('TiposComplejos/Fax');

/**
 * Nombre:        Emisor o Receptor del comprobante
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que contiene los datos del emisor o receptor del comprobante
 */
class Remisor {
  /**
   * Nombre:        Nombre o razón social
   * Tipo:          String
   * Tamaño:        100
   * Descripcion:
   */
  Nombre = '';

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que contiene los datos de identificación
   */
  Identificacion = new Identificacion();

  /**
   * Nombre:        Nombre comercial
   * Tipo:          String
   * Tamaño:        80
   * Descripcion:   En el caso que se cuente con nombre comercial debe indicarse. Es opcional
   */
  NombreComercial = '';

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que contiene el detalle de una ubicación
   */
  Ubicacion = new Ubicacion();

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo para un número telefónico. Es opcional.
   */
  Telefono = new Telefono();

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo para un número de fax. Es opcional.
   */
  Fax = new Fax();

  /**
   * Nombre:        Dirección del correo electrónico.
   * Tipo:          String
   * Tamaño:        160
   * Descripcion:   Debe cumplir con la siguiente estructura: ^\\s*(([^<>()\\[\\]\\.,;:\\s@\\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()\\[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()\\[\\]\\.,;:\\s@\\\"]{0,})\\s*$
   */
  CorreoElectronico = '';
}
