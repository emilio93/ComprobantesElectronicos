export type DescuentoXML = {
  MontoDescuento: Array<string>;
  NaturalezaDescuento: Array<string>;
};

/**
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo descuento.
 *                Se puede incluir un máximo de 5 repeticiones de descuentos, cada descuento adicional se calcula sobre la base menos el descuento anterior.
 */
export class Descuento {
  /**
   * Nombre:        Monto de descuentos concedidos
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será  de condición obligatoria, cuando exista un descuento.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  MontoDescuento?: string;

  /**
   * Nombre:        Naturaleza del descuento
   * Tipo:          String
   * Tamaño:        80
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “monto de descuentos concedidos”
   */
  NaturalezaDescuento?: string;

  constructor(descuento: DescuentoXML) {
    if (!descuento) return;
    this.MontoDescuento = descuento.MontoDescuento?.[0];
    this.NaturalezaDescuento = descuento.NaturalezaDescuento?.[0];
  }
}
