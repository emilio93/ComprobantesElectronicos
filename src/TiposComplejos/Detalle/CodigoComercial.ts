/**
 * Nombre:        CodigoComercial
 * Tipo:          String
 * Tamaño:        2
 * Descripcion:   Tipo complejo para el código de un producto o servicio.
 *                Se puede incluir un máximo de 5 repeticiones de códigos de producto/servicio.
 */
export class CodigoComercial {
  /**
   * Nombre:        Tipo de Código de producto/servicio
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver nota 12
   */
  Tipo: string;
  // 12/ La codificación a utilizar en el campo “Tipo de Código de producto/servicio” es la siguiente, sin embargo para efectos deimpresión y visualización se debe mostrar la descripción del nombre:
  // Tipo de Código  de producto/servicio          Código
  // Código del producto del vendedor              01
  // Código del producto del comprador             02
  // Código del producto asignado por la industria 03
  // Código uso interno                            04
  // Otros                                         99

  /**
   * Nombre:        Código
   * Tipo:          String
   * Tamaño:        20
   * Descripcion:
   */
  Codigo: string;

  constructor(codigoComercial) {
    if (codigoComercial === null) return;
    this.Tipo = codigoComercial?.Tipo?.[0];
    this.Codigo = codigoComercial?.Codigo?.[0];
  }
}
