import { Remisor, RemisorXML } from "../../TiposComplejos/Datos/Remisor";

export type ReceptorXML = RemisorXML & {
  IdentificacionExtranjero: Array<string>;
  OtrasSenasExtranjero: Array<string>;
};

/**
 * Nombre:        Receptor del comprobante
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que contiene los datos del receptor del comprobante
 */
export class Receptor extends Remisor {
  /**
   * Nombre:        Número de identificación en caso de que el receptor sea un extranjero
   * Tipo:          String
   * Tamaño:        20
   * Descripcion:   Este campo será  de condición obligatoria, cuando el cliente lo requiera
   */
  IdentificacionExtranjero?: string;

  /**
   * Nombre:        Otras señas Extranjero
   * Tipo:          String
   * Tamaño:        300
   * Descripcion:   Campo para incluir la dirección en el extranjero, en caso de requerirlo.
   */
  OtrasSenasExtranjero?: string;

  constructor(receptor: ReceptorXML) {
    super(receptor);
  }
}
