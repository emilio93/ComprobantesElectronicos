import { CodigoComercial, CodigoComercialXML } from "./CodigoComercial";
import { Descuento, DescuentoXML } from "./Descuento";
import { Impuesto, ImpuestoXML } from "./Impuesto";

export type LineaDetalleXML = {
  NumeroLinea: Array<number>;
  PartidaArancelaria: Array<string>;
  Codigo: Array<string>;
  CodigoComercial: Array<CodigoComercialXML>;
  Cantidad: Array<number>;
  UnidadMedida: Array<number>;
  UnidadMedidaComercial: Array<number>;
  Detalle: Array<string>;
  PrecioUnitario: Array<number>;
  MontoTotal: Array<number>;
  Descuento: Array<DescuentoXML>;
  SubTotal: Array<number>;
  BaseImponible: Array<number>;
  Impuesto: Array<ImpuestoXML>;
  ImpuestoNeto: Array<number>;
  MontoTotalLinea: Array<number>;
};

export class LineaDetalle {
  /**
   * Nombre:        Número de la línea
   * Tipo:          PositiveInteger
   * Tamaño:
   * Descripcion:   De 1 a 1000
   */
  NumeroLinea?: number;

  /**
   * Nombre:        Partida Arancelaria
   * Tipo:          String
   * Tamaño:        12
   * Descripcion:   Se convierte en carácter obligatorio cuando se elija el tipo de comprobante “Factura electrónicade exportación”y la misma corresponda a la venta de una mercancía.
   */
  PartidaArancelaria?: string;

  /**
   * Nombre:        Código de Producto/servicio
   * Tipo:          String
   * Tamaño:        13
   * Descripcion:   Ver nota 17
   * Footnote:      Rige apartir del 01/12/2020; a partir de la fecha indicada anteriormente dicho campo se convierte en “Obligatorio”.
   */
  Codigo?: string;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo para el código de un producto o servicio. Se puede incluir un máximo de 5 repeticiones de códigos de producto/servicio.
   */
  CodigoComercial?: CodigoComercial;

  /**
   * Nombre:        Cantidad
   * Tipo:          Decimal
   * Tamaño:        16,3
   * Descripcion:   Es un número decimal compuesto por 13 enteros y 3 decimales.
   */
  Cantidad?: number;

  /**
   * Nombre:        Unidad de Medida
   * Tipo:          String
   * Tamaño:        15
   * Descripcion:   Ver nota 15
   */
  UnidadMedida?: number;

  /**
   * Nombre:        Unidad de Medida Comercial
   * Tipo:          String
   * Tamaño:        20
   * Descripcion:   Nodo utilizado para indicar una unidad de medida que nace del propio giro comercial del establecimiento, no es una cantidad estandarizada de una determinada magnitud física, definida y adoptada por convención o por ley ejemplo  "1 Tarima"
   */
  UnidadMedidaComercial?: number;

  /**
   * Nombre:        Detalle de la mercancía transferida o servicio prestado
   * Tipo:          String
   * Tamaño:        200
   * Descripcion:   Debe describirse el servicio o mercancía.
   *                Es de carácter obligatorio cuando el comprobante incorpore al menos una línea de un producto o servicio.
   *                Debe de detallarse el tipo de producto o servicio que se brinde.
   */
  Detalle?: string;

  /**
   * Nombre:        Precio unitario
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  PrecioUnitario?: number;

  /**
   * Nombre:        Monto total
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la multiplicación del campo “cantidad” por el campo “precio unitario”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  MontoTotal?: number;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo descuento.Se puede incluir un máximo de 5 repeticiones de descuentos, cada descuento adicional se calcula sobre la base menos el descuento anterior.
   */
  Descuento?: Descuento;

  /**
   * Nombre:        Número de la línea
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la resta del campo “monto total” menos “monto de descuento concedido”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  SubTotal?: number;

  /**
   * Nombre:        Base imponible especial
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se convierteen obligatorio cuando se seleccione en el campo “Código del impuesto” 07.
   *                No es necesario su visualisacion para la representación grafica.
   */
  BaseImponible?: number;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo con el detalle del impuesto.
   *                Este campo sea de condición obligatoria, cuando el producto/servicio este gravado con algún impuesto.
   *                Se pueden utilizar para una misma línea la cantidad de códigos de impuestos que se requieran paracada producto.
   */
  Impuesto?: Impuesto;

  /**
   * Nombre:        Impuesto Neto
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será  de condición obligatoria, cuandose incluya información en el campo “Tipo de exoneración”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   *                Este monto se obtiene al restar el campo  “Monto del Impuesto” menos “Monto del Impuesto Exonerado”.
   *                Escaso de estar exonerado el 100 % se debe de colocar “0”.
   */
  ImpuestoNeto?: number;

  /**
   * Nombre:        Total por línea de detalle
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Existe dos maneras de obtener el resultado del campo:
   *                  -Cuando no existe exoneración, se obtiene de la sumatoria de los campos  “subtotal”,  “monto del impuesto
   *                  -Cuando posee una exoneración, se obtiene de la sumatoria de los campos  “Subtotal”, “Impuesto Neto”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  MontoTotalLinea?: number;

  constructor(lineaDetalle: LineaDetalleXML) {
    if (!lineaDetalle) return;
    this.NumeroLinea = lineaDetalle.NumeroLinea?.[0];
    this.PartidaArancelaria = lineaDetalle.PartidaArancelaria?.[0];
    this.Codigo = lineaDetalle.Codigo?.[0];
    this.CodigoComercial = new CodigoComercial(
      lineaDetalle.CodigoComercial?.[0]
    );
    this.Cantidad = lineaDetalle.Cantidad?.[0];
    this.UnidadMedida = lineaDetalle.UnidadMedida?.[0];
    this.UnidadMedidaComercial = lineaDetalle.UnidadMedidaComercial?.[0];
    this.Detalle = lineaDetalle.Detalle?.[0];
    this.PrecioUnitario = lineaDetalle.PrecioUnitario?.[0];
    this.MontoTotal = lineaDetalle.MontoTotal?.[0];
    this.Descuento = new Descuento(lineaDetalle.Descuento?.[0]);
    this.SubTotal = lineaDetalle.SubTotal?.[0];
    this.BaseImponible = lineaDetalle.BaseImponible?.[0];
    this.Impuesto = new Impuesto(lineaDetalle.Impuesto?.[0]);
    this.ImpuestoNeto = lineaDetalle.ImpuestoNeto?.[0];
    this.MontoTotalLinea = lineaDetalle.MontoTotalLinea?.[0];
  }
}
