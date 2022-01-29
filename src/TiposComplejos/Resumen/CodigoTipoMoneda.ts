export type CodigoTipoMonedaXML = {
  CodigoMoneda: Array<string>;
  TipoCambio: Array<number>;
};

/**
 * Nombre:        Código y Tipo de Moneda
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Se convierte en obligatorio cuando el comprobante electrónico se exprese en moneda extranjera.
 */
export class CodigoTipoMoneda {
  /**
   * Nombre:        Código de la moneda.
   * Tipo:          String
   * Tamaño:        3
   * Descripcion:   Ver nota 13 y nota 13.1
   */
  CodigoMoneda: string | undefined;
  // 13/ Cuando  el  comprobante  electrónico  se  exprese  en  moneda  extranjera  debe  indicarse  la  moneda  en  que  se realizó  la  operación,  para  efectos  de  impresión  y  visualización  se  debe  mostrar  del Código de la moneda.
  // 13.1/ El Código a utilizar en el nodo "Código de la moneda“ esel siguiente: Ver documento denominado “Codigodemoneda_V4.3”.

  /**
   * Nombre:        Tipo de cambio
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TipoCambio: number | undefined;

  constructor(codigoTipoFactura: CodigoTipoMonedaXML) {
    if (!codigoTipoFactura) return;
    this.CodigoMoneda = codigoTipoFactura.CodigoMoneda?.[0];
    this.TipoCambio = codigoTipoFactura.TipoCambio?.[0];
  }
}
