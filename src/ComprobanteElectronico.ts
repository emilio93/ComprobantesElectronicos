import { readFile } from "fs/promises";

import { Emisor } from './TiposComplejos/Datos/Emisor';
import { Receptor } from './TiposComplejos/Datos/Receptor';

import { DetalleServicio } from './TiposComplejos/Detalle/DetalleServicio';
import { ResumenFactura } from './TiposComplejos/Resumen/ResumenFactura'
import { OtrosCargos } from './TiposComplejos/Detalle/OtrosCargos'

import { InformacionReferencia } from './TiposComplejos/Referencia/InformacionReferencia'

import { Parser } from 'xml2js';
import { ComprobanteElectronicoFactory } from './ComprobantesElectronicos/ComprobanteElectronicoFactory';

export abstract class ComprobanteElectronico {

  Datos: Datos;
  Detalle: Detalle;
  Referencia: Referencia;
  Resumen: Resumen;

  constructor(comprobante) {
    this.Datos = new Datos(comprobante);
    this.Detalle = new Detalle(comprobante);
    this.Resumen = new Resumen(comprobante);
    this.Referencia = new Referencia(comprobante);
  }

  static async parseXmlString(xmlString) : Promise<ComprobanteElectronico> {
    let parser = new Parser();
    let parsedXml;
    try {
      parsedXml = await parser.parseStringPromise(xmlString);
    } catch (error) {
      throw error;
    }
    let factory = new ComprobanteElectronicoFactory();
    let Comprobante = factory.create(parsedXml);

    return Comprobante;
  }

  static async parseXmlFile(xmlFile) : Promise<ComprobanteElectronico> {
    const xml = await readFile(xmlFile);
    const xmlString = xml.toString();
    const fe = await ComprobanteElectronico.parseXmlString(xmlString);
    return fe;
  }

  abstract validarCondicionCampos(): boolean;
}

/**
Condición de los campos
Los códigos que se utilizarán en cada uno de los campos según el comprobante electrónico a utilizar, son los siguientes:
1: Dato obligatorio.
  El dato debe estar en el documento siempre, independiente de las características de la transacción.
2:Dato condicional.
  El dato no es obligatorio en todos los documentos, pero pasa a ser obligatorio en determinadas operaciones si se cumple unacierta condición.
  Por ejemplo:
    -Si hay descuentos o recargos, éstos deben estar registrados porque en caso contrario los montos del documento son inconciliables, en relación con los montos netos, impuesto de ventas y Total.
    -La información se encuentra condicionado a la existencia de la misma como por ejemplo impuestos de venta en un servicio o nombre comercial.
    -Si en la factura se encuentra el dato el mismo debe de existir en las notas de crédito y débito.
3 Opcional.
  Si la persona lo desea puede indicarlo
4 Inexistente.
  No debe de ser utilizado, por ejemplo,exoneraciones en el tipo de comprobante “Factura electrónica de Exportación”.

En la condición de los campos, se utilizan los encabezados:
  FE      Factura Electrónica FEE     Factura Electrónica Exportación FEC     Factura Electrónica Compra TE      Tiquete Electrónico NC      Nota de Crédito ND      Nota de Débito
 */

// Los comprobantes electrónicos están constituidos por las siguientes partes:

// a)Datos de encabezado:
//      corresponden a la versión, numeración e identificación del documento electrónico, condiciones de la venta, información del emisor y la información del receptor.
export class Datos {
  /**
   * Nombre:        Código de la Actividad Económica
   * Tipo:          String
   * Tamaño:        6
   * Descripcion:   Se debe de indicar el código de la actividad económica a la cual corresponde el comprobante electrónico, en caso de contar con másde una actividad economica se debe de ingresar el código de la actividad principal.
   */
  CodigoActividad: string;

  /**
   * Nombre:        Clave del comprobante
   * Tipo:          String
   * Tamaño:        50
   * Descripcion:
   *    Debe cumplir con la estructura con respecto a tamaño y posición de los campos, tal como se establece en la resolución. Es un campo fijo de cincuenta posiciones y se tiene que utilizar para la consulta del código QR.Solo permite ingresar números.Ver nota 1Ver nota 4.1
   */
  Clave: string;

  /**
   * Nombre:        Numeración consecutiva del comprobante
   * Tipo:          String
   * Tamaño:        20
   * Descripcion:   Es un campo fijo de veinte posiciones. Solo permite ingresar números.Ver notas 1 y 3
   */
  NumeroConsecutivo: string;

  /**
   * Nombre:        Fecha de Emisión del comprobante
   * Tipo:          DateTime
   * Tamaño:
   * Descripcion:   Tipo de dato de fecha y hora, basado en el estándar RFC3339 sección 5.6, tipo “date-time”.
   *                Formato: YYYY-MM-DDThh:mi:ss[Z|(+|-)hh:mm]
   *                Ejemplo: 2016-09-26T13:00:00+06:00
   */
  FechaEmision: string;

  /**
   * Nombre:        Emisor del comprobante
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que contiene los datos del emisor del comprobante
   */
  Emisor: Emisor;

  /**
   * Nombre:        Receptor del comprobante
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que contiene los datos del receptor del comprobante
   */
  Receptor: Receptor;

  /**
   * Nombre:        Condiciones de la venta
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Ver notas 5 y 7
   */
  CondicionVenta: string;

  /**
   * Nombre:        Plazo del crédito
   * Tipo:          String
   * Tamaño:        10
   * Descripcion:   Este campo será de condición obligatoria, cuando la venta del producto o prestación de servicio sea a crédito
   */
  PlazoCredito: string;

  /**
   * Nombre:        Medio de pago
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones
   *                Se puede incluir un máximo de 4 medios de pago.
   *                Ver notas 6 y 7
   */
  MedioPago: string;


  constructor(comprobante) {
    this.Emisor = new Emisor(comprobante.Emisor[0]);
    this.Receptor = new Receptor(comprobante.Receptor[0])

    this.Clave = comprobante.Clave[0];
    this.CodigoActividad = comprobante.CodigoActividad[0];
    this.CondicionVenta = comprobante.CondicionVenta[0];

    this.FechaEmision = comprobante.FechaEmision[0];
    this.MedioPago = comprobante.MedioPago[0];
    this.NumeroConsecutivo = comprobante.NumeroConsecutivo[0];
    this.PlazoCredito = comprobante.PlazoCredito[0];
  }
}

// b)Detalle de la mercancía o servicio prestado:
//      En esta parte se debe detallar una línea por cada artículo, especificando cantidad, valor, impuestos adicionales y valor neto, así  como descuentos y recargos que afectan al total del documento y que no se requiere especificar individualmente, así como el monto total de la transacción.
export class Detalle {
  /**
   * Nombre:        Detalle del Servicio, Mercancía u otro.
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que agrupa las líneas del detalle.
   *                Es de carácter obligatorio cuando el comprobante incorpore al menos una línea de un producto o servicio.
   */
  DetalleServicio: DetalleServicio;

  /**
   * Nombre:        Informacion sobre otros Cargos.
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo.Se puede incluir un máximo de 15 repeticiones, cuando se posean otros cargos que forman parte del costo total de la línea de detalle.
   */
  OtrosCargos: OtrosCargos;

  constructor(comprobante) {
    this.DetalleServicio = new DetalleServicio(comprobante?.DetalleServicio?.[0]);
    this.OtrosCargos = new OtrosCargos(comprobante?.OtrosCargos?.[0]);
  }
}

// c)Resumen del comprobante /Total de comprobante:
//      Corresponde a la totalización de los montos del comprobante electrónico.
export class Resumen {
  /**
   * Nombre:        Resumen de la Factura
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que representa el resumen de la factura.
   */
  ResumenFactura: ResumenFactura;

  constructor(comprobante) {
    this.ResumenFactura = new ResumenFactura(comprobante?.ResumenFactura?.[0]);
  }
}

// d)Información de referencia:
//      Se deben detallar la razón y/o los documentos de referencia, por ejemplo se debe identificar la factura que se está modificando con una nota de crédito o de débito; y en el caso de comprobantes electrónicos que sustituyen comprobantes físicos emitidos por contingencia, se debe hacer referencia al comprobante provisional.
export class Referencia {
  /**
 * Nombre:        Información de Referencia
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que representa el detalle de la referencia.
 */
  InformacionReferencia: InformacionReferencia;

  constructor(comprobante) {
    this.InformacionReferencia = new InformacionReferencia(comprobante?.InformacionReferencia?.[0]);
  }
}

// e)Otros:
//      comprende la información requerida para las relaciones de comercio electrónico entre las partes, que no contravenga lo establecido en la presente resolución.
export class Otros {
  /**
   * Nombre:        Otros
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que agrupa varias definiciones de "Otros.
   */
  Otros: Otros;

  constructor(comprobante) {
    this.Otros = new Otros(comprobante?.InformacionReferencia?.[0]);
  }
}

// f)Mecanismo de seguridad:
//      En esta sección se debe incluir la firma digital o el método de seguridad emitido por el Ministerio de Hacienda sobre todo el documento, para garantizar la integridad del mismo.
// Nota:Solamente se permite el uso de un mecanismo de seguridad a la vez, no obstante si el obligado tributario por su giro comercial decide pasarse de un método de seguridad a otro puede hacerlo. El formato para los documentos electrónicos es único, así como en su forma electrónica o impresa, lo que los diferencia es la obligatoriedad de los campos según el tipo de documento. Adicionalmente, este documento contempla el formato de los archivos XML de confirmación (aceptación y rechazo) de los comprobantes electrónicos.
export class Seguridad {
}

export class FacturaElectronica extends ComprobanteElectronico {

  constructor(parsedXml: Object) {
    super(parsedXml);
  }

  validarCondicionCampos(): boolean {
    return true;
  }
}
