export type IdentificacionXML = {
  Tipo: Array<string>;
  Numero: Array<string>;
};

/**
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que contiene los datos de identificación de un emisor o receptor
 */
export class Identificacion {
  /**
   * Nombre:        Tipo de identificación
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones.Este campo será  de condición obligatoria, cuando se posea información en el nodo “Número de cédula física/ jurídica/NITE/DIMEX receptor
   *                Ver nota 4
   */
  Tipo?: string;

  /**
   * Nombre:        Número de cédula física/ jurídica/NITE/DIMEX del receptor
   * Tipo:          String
   * Tamaño:        12
   * Descripcion:   Este campo será  de condición obligatoria, cuando se posea información en el nodo “Tipo de identificación del receptor.
   *                Formato:
   *                  La “Cédula física” debe de contener 9 dígitos, sin cero al inicio y sin guiones
   *                  La  “cédula de personas Jurídicas”  debe contener 10 dígitos y sin guiones
   *                  El  “Documento de Identificación Migratorio para Extranjeros (DIMEX)” debe contener 11 o 12 dígitos, sin ceros al inicio y sin guiones
   *                  El  “Documento de Identificación de la DGT  (NITE)” debe contener 10 dígitos y sin guiones.
   */
  Numero?: string;

  constructor(identificacion: IdentificacionXML) {
    if (!identificacion) return;
    this.Numero = identificacion.Numero?.[0];
    this.Tipo = identificacion.Tipo?.[0];
  }
}
