// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

class LineaDetalle {
  /**
   * Nombre:        Número de la línea
   * Tipo:          PositiveInteger
   * Tamaño:
   * Descripcion:   De 1 a 1000
   */
  NumeroLinea = 1;

  /**
   * Nombre:        Partida Arancelaria
   * Tipo:          String
   * Tamaño:        12
   * Descripcion:   Se convierte en carácter obligatorio cuando se elija el tipo de comprobante “Factura electrónicade exportación”y la misma corresponda a la venta de una mercancía.
   */
  PartidaArancelaria = '';

  /**
   * Nombre:        Código de Producto/servicio
   * Tipo:          String
   * Tamaño:        13
   * Descripcion:   Ver nota 17
   * Footnote:      Rige apartir del 01/12/2020; a partir de la fecha indicada anteriormente dicho campo se convierte en “Obligatorio”.
   */
  Codigo = '';

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo para el código de un producto o servicio. Se puede incluir un máximo de 5 repeticiones de códigos de producto/servicio.
   */
  CodigoComercial = null;

  /**
   * Nombre:        Cantidad
   * Tipo:          Decimal
   * Tamaño:        16,3
   * Descripcion:   Es un número decimal compuesto por 13 enteros y 3 decimales.
   */
  Cantidad = 0;

  /**
   * Nombre:        Unidad de Medida
   * Tipo:          String
   * Tamaño:        15
   * Descripcion:   Ver nota 15
   */
  UnidadMedida = 0;

  /**
   * Nombre:        Unidad de Medida Comercial
   * Tipo:          String
   * Tamaño:        20
   * Descripcion:   Nodo utilizado para indicar una unidad de medida que nace del propio giro comercial del establecimiento, no es una cantidad estandarizada de una determinada magnitud física, definida y adoptada por convención o por ley ejemplo  "1 Tarima"
   */
  UnidadMedidaComercial = 0;

  /**
   * Nombre:        Detalle de la mercancía transferida o servicio prestado
   * Tipo:          String
   * Tamaño:        200
   * Descripcion:   Debe describirse el servicio o mercancía.
   *                Es de carácter obligatorio cuando el comprobante incorpore al menos una línea de un producto o servicio.
   *                Debe de detallarse el tipo de producto o servicio que se brinde.
   */
  Detalle = '';

  /**
   * Nombre:        Precio unitario
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  PrecioUnitario = 0;

  /**
   * Nombre:        Monto total
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la multiplicación del campo “cantidad” por el campo “precio unitario”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  MontoTotal = 0;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo descuento.Se puede incluir un máximo de 5 repeticiones de descuentos, cada descuento adicional se calcula sobre la base menos el descuento anterior.
   */
  Descuento = null;

  /**
   * Nombre:        Número de la línea
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la resta del campo “monto total” menos “monto de descuento concedido”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  SubTotal = 0;

  /**
   * Nombre:        Base imponible especial
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se convierteen obligatorio cuando se seleccione en el campo “Código del impuesto” 07.
   *                No es necesario su visualisacion para la representación grafica.
   */
  BaseImponible = 0;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo con el detalle del impuesto.
   *                Este campo sea de condición obligatoria, cuando el producto/servicio este gravado con algún impuesto.
   *                Se pueden utilizar para una misma línea la cantidad de códigos de impuestos que se requieran paracada producto.
   */
  Impuesto = null;

  /**
   * Nombre:        Impuesto Neto
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será  de condición obligatoria, cuandose incluya información en el campo “Tipo de exoneración”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   *                Este monto se obtiene al restar el campo  “Monto del Impuesto” menos “Monto del Impuesto Exonerado”.
   *                Escaso de estar exonerado el 100 % se debe de colocar “0”.
   */
  ImpuestoNeto = 0;

  /**
   * Nombre:        Total por línea de detalle
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Existe dos maneras de obtener el resultado del campo:
   *                  -Cuando no existe exoneración, se obtiene de la sumatoria de los campos  “subtotal”,  “monto del impuesto
   *                  -Cuando posee una exoneración, se obtiene de la sumatoria de los campos  “Subtotal”, “Impuesto Neto”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  MontoTotalLinea = 0;
}
