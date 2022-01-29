import { Identificacion, IdentificacionXML } from "./Identificacion";
import { Ubicacion, UbicacionXML } from "./Ubicacion";
import { Telefono } from "./Telefono";
import { Fax } from "./Fax";
import { TelefoniaXML } from "./Telefonia";

export type RemisorXML = {
  Nombre: Array<string>;
  Identificacion: Array<IdentificacionXML>;
  NombreComercial: Array<string>;
  Ubicacion: Array<UbicacionXML>;
  Telefono: Array<TelefoniaXML>;
  Fax: Array<TelefoniaXML>;
  CorreoElectronico: Array<string>;
};

/**
 * Nombre:        Emisor o Receptor del comprobante
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que contiene los datos del emisor o receptor del comprobante
 */
export abstract class Remisor {
  /**
   * Nombre:        Nombre o razón social
   * Tipo:          String
   * Tamaño:        100
   * Descripcion:
   */
  Nombre?: string;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que contiene los datos de identificación
   */
  Identificacion?: Identificacion;

  /**
   * Nombre:        Nombre comercial
   * Tipo:          String
   * Tamaño:        80
   * Descripcion:   En el caso que se cuente con nombre comercial debe indicarse. Es opcional
   */
  NombreComercial?: string;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que contiene el detalle de una ubicación
   */
  Ubicacion?: Ubicacion;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo para un número telefónico. Es opcional.
   */
  Telefono?: Telefono;

  /**
   * Nombre:
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo para un número de fax. Es opcional.
   */
  Fax?: Fax;

  /**
   * Nombre:        Dirección del correo electrónico.
   * Tipo:          String
   * Tamaño:        160
   * Descripcion:   Debe cumplir con la siguiente estructura: ^\\s*(([^<>()\\[\\]\\.,;:\\s@\\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()\\[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()\\[\\]\\.,;:\\s@\\\"]{0,})\\s*$
   */
  CorreoElectronico?: string;

  constructor(remisor: RemisorXML) {
    this.Identificacion = new Identificacion(remisor.Identificacion?.[0]);
    this.Fax = new Fax(remisor.Fax?.[0]);
    this.Telefono = new Telefono(remisor.Telefono?.[0]);
    this.Ubicacion = new Ubicacion(remisor.Ubicacion?.[0]);

    this.CorreoElectronico = remisor.CorreoElectronico?.[0];
    this.Nombre = remisor.Nombre?.[0];
    this.NombreComercial = remisor.NombreComercial?.[0];
  }
}
