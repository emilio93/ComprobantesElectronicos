export type OtrosCargosXML = {
  TipoDocumento: Array<number>;
  NumeroIdentidadTercero: Array<number>;
  NombreTercero: Array<string>;
  Detalle: Array<string>;
  Porcentaje: Array<number>;
  MontoCargo: Array<number>;
};

export class OtrosCargos {
  /**
   * Nombre:        Tipo de documento
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Ver nota 16
   */
  TipoDocumento?: number;

  /**
   * Nombre:        Número de cédula física/ jurídica/NITE/DIMEX del emisor
   * Tipo:          String
   * Tamaño:        12
   * Descripcion:   Este campo será de condición  obligatoria, cuando se seleccione en “tipo de documento” el código 04.
   *                Cuando seleccione 04 en tipo de documento y no se cuente con una línea de servicio o producto, no es obligatorio usar la parte b)  Detalle  de  la  mercancía  o servicio prestado.
   *                El (5) tercero debe de estar inscrito como contribuyente.
   *                Formato:
   *                La “Cédula física” debe de contener 9 dígitos, sin cero al inicio y sin guiones La “cédula de personas Jurídicas” debe contener 10 dígitos y sin guiones
   *                El “Documento de Identificación Migratorio para Extranjeros (DIMEX)” debe contener 11 o 12 dígitos, sin ceros al inicio y sin guiones
   *                El “Documento de Identificación de la DGT (NITE)” debe contener 10 dígitos y sin guiones.
   *
   * Footnote:       5 Se entenderá como tercero el contribuyente que vende o presta el servicio o mercancía que se está cobrando.
   */
  NumeroIdentidadTercero?: number;

  /**
   * Nombre:        Nombre o razón social del Receptor
   * Tipo:          String
   * Tamaño:        100
   * Descripcion:   Este campo será de condición obligatoria, cuando se seleccione en “tipo de documento” el código 04.
   */
  NombreTercero?: string;

  /**
   * Nombre:        Detalle de otros Cargos.
   * Tipo:          String
   * Tamaño:        160
   * Descripcion:   Se debe de indicar la descripción del cargo.
   */
  Detalle?: string;

  /**
   * Nombre:        Porcentaje
   * Tipo:          Decimal
   * Tamaño:        9,5
   * Descripcion:   En el caso que el cargo posea un porcentaje o monto para su cálculo se debe de indicar el mismo.
   */
  Porcentaje?: number;

  /**
   * Nombre:        Monto del cargo
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Monto total del cargo.
   */
  MontoCargo?: number;

  constructor(otrosCargos: OtrosCargosXML) {
    if (!otrosCargos) return;
    this.TipoDocumento = otrosCargos.TipoDocumento?.[0];
    this.NumeroIdentidadTercero = otrosCargos.NumeroIdentidadTercero?.[0];
    this.NombreTercero = otrosCargos.NombreTercero?.[0];
    this.Detalle = otrosCargos.Detalle?.[0];
    this.Porcentaje = otrosCargos.Porcentaje?.[0];
    this.MontoCargo = otrosCargos.MontoCargo?.[0];
  }
}
