export type ExoneracionXML = {
  Tipodocumento: Array<string>;
  NumeroDocumento: Array<string>;
  NombreInstitucion: Array<string>;
  FechaEmision: Array<string>;
  PorcentajeExoneracion: Array<string>;
  MontoExoneracion: Array<string>;
};

/**
 * Nombre:        Información de exoneración
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo con detalles de la exoneración.
 *                Este campo será de condición obligatoria cuando la venta tenga alguna exoneración.
 */
export class Exoneracion {
  /**
   * Nombre:        Tipo de documento de exoneración o de autorización.
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 10.1 y 7
   */
  Tipodocumento?: string;

  /**
   * Nombre:        Número de documento de exoneración o de autorización
   * Tipo:          String
   * Tamaño:        40
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de documento de exoneración o de autorización”
   *                Debe de indicarse tal y como se encuentra en el documento otorgado por la institución incluyendo los guiones.
   */
  NumeroDocumento?: string;

  /**
   * Nombre:        Nombre  de  institución  o dependencia  que  emitió la exoneración
   * Tipo:          String
   * Tamaño:        160
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de documento de exoneración o de autorización”
   */
  NombreInstitucion?: string;

  /**
   * Nombre:        Fecha de emisión del documento de exoneración o de autorización
   * Tipo:          DateTime
   * Tamaño:
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de documento de exoneración o de autorización”.
   *                Tipo de dato de fecha y hora, basado en  el  estándar RFC3339 sección 5.6, tipo “date-time”.Formato: YYYY-MM-DDThh:mi:ss[Z|(+|-)hh:mm]Ejemplo: 2016-09-26T13:00:00+06:00
   */
  FechaEmision?: string;

  /**
   * Nombre:        Porcentaje de la Exoneración
   * Tipo:          Integer
   * Tamaño:        3
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de exoneración”.
   *                Debe de indicarse el porcentaje otorgado de exoneración.
   */
  PorcentajeExoneracion?: string;

  /**
   * Nombre:        Monto del Impuesto Exonerado
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando se incluya información en el campo “Tipo de exoneración”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   *                Dicho monto se obtiene de la multiplicación del campo “porcentaje de la exoneración” por el campo “Monto del Impuesto”.
   * Footnote:      4 Apartir del 01 de julio del 2020 la fórmulade cálculodel campo denominado “Monto de Impuesto exonerado” se modifica de la siguiente manera“Se obtiene de la multiplicación del campo “porcentaje de la exoneración” por el campo “Subtotal”.
   */
  MontoExoneracion?: string;

  constructor(exoneracion: ExoneracionXML) {
    if (!exoneracion) return;
    this.Tipodocumento = exoneracion.Tipodocumento?.[0];
    this.NumeroDocumento = exoneracion.NumeroDocumento?.[0];
    this.NombreInstitucion = exoneracion.NombreInstitucion?.[0];
    this.FechaEmision = exoneracion.FechaEmision?.[0];
    this.PorcentajeExoneracion = exoneracion.PorcentajeExoneracion?.[0];
    this.MontoExoneracion = exoneracion.MontoExoneracion?.[0];
  }
}
