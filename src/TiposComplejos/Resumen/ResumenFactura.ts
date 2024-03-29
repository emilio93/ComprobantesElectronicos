import { CodigoTipoMoneda, CodigoTipoMonedaXML } from "./CodigoTipoMoneda";

export type ResumenFacturaXML = {
  CodigoTipoMoneda: Array<CodigoTipoMonedaXML>;
  TotalServGravados: Array<number>;
  TotalServExentos: Array<number>;
  TotalServExonerado: Array<number>;
  TotalMercanciasGravadas: Array<number>;
  TotalMercanciasExentas: Array<number>;
  TotalMercExonerada: Array<number>;
  TotalGravado: Array<number>;
  TotalExento: Array<number>;
  TotalExonerado: Array<number>;
  TotalVenta: Array<number>;
  TotalDescuentos: Array<number>;
  TotalVentaNeta: Array<number>;
  TotalImpuesto: Array<number>;
  TotalIVADevuelto: Array<number>;
  TotalOtrosCargos: Array<number>;
  TotalComprobante: Array<number>;
};

/**
 * Nombre:        Resumen de la Factura
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que representa el resumen de la factura.
 */
export class ResumenFactura {
  /**
   * Nombre:        Código y Tipo de Moneda
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Se convierte en obligatorio cuando el comprobante electrónico se exprese en moneda extranjera.
   */
  CodigoTipoMoneda: CodigoTipoMoneda | undefined;

  /**
   * Nombre:        Total  servicios  gravados con IV
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando el servicio este gravado con IVA.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   *                En el caso que exista una exoneración Este campo se obtiene de la multiplicación (1-porcentaje de exoneración) por el monto de la venta.
   */
  TotalServGravados: number | undefined;

  /**
   * Nombre:        Total servicios exentos de IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando el servicio este exento de IVA.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalServExentos: number | undefined;

  /**
   * Nombre:        Total servicios exonerados del IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando el servicio esté gravado y se preste a un cliente que goce de exoneración, se debe de indicar el monto equivalente al porcentaje exonerado.
   *                Se obtiene de la multiplicación del porcentaje de la exoneración por el monto del servicio.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalServExonerado: number | undefined;

  /**
   * Nombre:        Total mercancías gravadas con IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando la mercancía este gravada con IVA.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   *                En el caso que exista una exoneración Este  campo  se obtiene de la multiplicación (1-porcentaje de exoneración) por el monto de la venta.
   */
  TotalMercanciasGravadas: number | undefined;

  /**
   * Nombre:        Total mercancías gravadas con IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando la mercancía esté exenta de IVA.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalMercanciasExentas: number | undefined;

  /**
   * Nombre:        Total mercancías exoneradas del IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando la mercancíao producto se venda a un cliente que goce de exoneración para la compra de la misma.
   *                Se obtiene de la multiplicación del porcentaje de la exoneración por el monto del producto.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalMercExonerada: number | undefined;

  /**
   * Nombre:        Total gravado
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de los campos “total servicios gravados con IVA” mas “total de mercancías gravadas con IVA”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalGravado: number | undefined;

  /**
   * Nombre:        Total exento
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de los campos “total servicios exentos de IVA” mas “total de mercancías exentas de IVA”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalExento: number | undefined;

  /**
   * Nombre:        Total exonerado
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de los campos “total servicios exonerados de IVA” mas “total de mercancías exoneradas del IVA”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalExonerado: number | undefined;

  /**
   * Nombre:        Total venta
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la sumatoria de los campos “total gravado”, “total exento” y “Total Exonerado”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalVenta: number | undefined;

  /**
   * Nombre:        Total descuentos
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de todos los campos de “monto de descuentos concedidos”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalDescuentos: number | undefined;

  /**
   * Nombre:        Total venta neta
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la resta de los campos “total venta” menos “total descuento”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalVentaNeta: number | undefined;

  /**
   * Nombre:        Total de impuesto
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo es de condición obligatoria, cuando existen producto/servicio gravados con algún impuesto en las líneas de detalle el mismo se obtiene de la suma de todos los campos denominados “Monto del impuesto” cuando no posea exoneración más todos los campos “Impuesto Neto” de las líneas que poseen exoneración
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalImpuesto: number | undefined;

  /**
   * Nombre:        IVA Devuelto
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria cuando se facturen servicios de salud y cuyo método de pago sea “Tarjeta”.
   *                Se obtiene de la sumatoria del Monto de los Impuestos pagado por los servicios de salud en tarjetas.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalIVADevuelto: number | undefined;

  /**
   * Nombre:        Total Otros Cargos
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando se posean otros cargos.
   *                Se obtiene de la suma de todos los campos “Monto del cargo”.
   */
  TotalOtrosCargos: number | undefined;

  /**
   * Nombre:        Total del comprobante
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de los campos “total venta neta”, “monto total del impuesto” y “total otros cargos” menos “total IVA devuelto”, en caso de contar con dichos campos.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalComprobante: number | undefined;

  constructor(resumenFactura: ResumenFacturaXML) {
    if (!resumenFactura) return;
    this.CodigoTipoMoneda = new CodigoTipoMoneda(
      resumenFactura.CodigoTipoMoneda?.[0]
    );
    this.TotalServGravados = resumenFactura.TotalServGravados?.[0];
    this.TotalServExentos = resumenFactura.TotalServExentos?.[0];
    this.TotalServExonerado = resumenFactura.TotalServExonerado?.[0];
    this.TotalMercanciasGravadas = resumenFactura.TotalMercanciasGravadas?.[0];
    this.TotalMercanciasExentas = resumenFactura.TotalMercanciasExentas?.[0];
    this.TotalMercExonerada = resumenFactura.TotalMercExonerada?.[0];
    this.TotalGravado = resumenFactura.TotalGravado?.[0];
    this.TotalExento = resumenFactura.TotalExento?.[0];
    this.TotalExonerado = resumenFactura.TotalExonerado?.[0];
    this.TotalVenta = resumenFactura.TotalVenta?.[0];
    this.TotalDescuentos = resumenFactura.TotalDescuentos?.[0];
    this.TotalVentaNeta = resumenFactura.TotalVentaNeta?.[0];
    this.TotalImpuesto = resumenFactura.TotalImpuesto?.[0];
    this.TotalIVADevuelto = resumenFactura.TotalIVADevuelto?.[0];
    this.TotalOtrosCargos = resumenFactura.TotalOtrosCargos?.[0];
    this.TotalComprobante = resumenFactura.TotalComprobante?.[0];
  }
}
