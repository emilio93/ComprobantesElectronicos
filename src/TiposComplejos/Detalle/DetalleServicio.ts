import { LineaDetalle, LineaDetalleXML } from "./LineaDetalle";

export type DetalleServicioXML = {
  LineaDetalle: Array<LineaDetalleXML>;
};

/**
 * Nombre:        Detalle de la mercancia o servicio prestado
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que agrupa las líneas del detalle.Es de carácter obligatorio cuando el comprobante incorpore al menos una línea de un producto o servicio.
 */
export class DetalleServicio {
  /**
   * Nombre:        Línea de detalle
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que representa cada línea del detalle de la mercancía o servicio prestado.
   */
  LineaDetalle?: Array<LineaDetalle>;

  constructor(detalleServicio: DetalleServicioXML) {
    if (!detalleServicio) return;
    this.LineaDetalle = [];
    detalleServicio.LineaDetalle.forEach((lineaDetalle: LineaDetalleXML) => {
      this.LineaDetalle?.push(new LineaDetalle(lineaDetalle));
    });
  }
}
