import { LineaDetalle } from './LineaDetalle'

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
  LineaDetalle: LineaDetalle[];


  constructor(detalleServicio) {
    if (detalleServicio === null) return;
    this.LineaDetalle = [];
    detalleServicio?.LineaDetalle?.forEach(lineaDetalle => {
      this.LineaDetalle.push(new LineaDetalle(lineaDetalle));
    });
  }
}
